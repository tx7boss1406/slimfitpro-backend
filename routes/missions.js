import express from "express";
import prisma from "../prisma/prismaClient.js";

const router = express.Router();

/**
 * 🔹 GET /missions/user/:userId
 * Retorna todas as missões do sistema com status individual do usuário
 */
router.get("/user/:userId", async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    if (isNaN(userId)) {
      return res.status(400).json({ message: "userId inválido" });
    }

    console.log("🔍 Buscando missões para userId:", userId);

    // ✅ Busca todas as missões fixas
    const missions = await prisma.mission.findMany({
      orderBy: { id: "asc" },
      select: {
        id: true,
        title: true,
        description: true,
        xpReward: true,
        dayNumber: true,
        details: true,
      },
    });

    if (!missions.length) {
      return res.json([]);
    }

    // ✅ Garante que cada usuário tem sua própria progressão
    for (const mission of missions) {
      const existing = await prisma.userMission.findUnique({
        where: {
          userId_missionId: {
            userId,
            missionId: mission.id,
          },
        },
      });

      if (!existing) {
        await prisma.userMission.create({
          data: {
            userId,
            missionId: mission.id,
            completed: false,
            completedAt: null,
          },
        });
      }
    }

    // ✅ Recarrega progresso do usuário
    const userMissions = await prisma.userMission.findMany({ where: { userId } });
    const now = new Date();

    const formatted = missions.map((mission, index) => {
      const um = userMissions.find((u) => u.missionId === mission.id);
      const isCompleted = um?.completed || false;

      let status = "Bloqueada";
      let unlockAvailableAt = null;
      let timeRemaining = null;

      // Primeira missão sempre liberada
      if (index === 0) {
        status = isCompleted ? "Concluída" : "Disponível";
      } else {
        const prev = userMissions.find((u) => u.missionId === missions[index - 1].id);
        const prevCompletedAt = prev?.completedAt;

        if (isCompleted) {
          status = "Concluída";
        } else if (prevCompletedAt) {
          unlockAvailableAt = new Date(prevCompletedAt.getTime() + 24 * 60 * 60 * 1000);
          if (now >= unlockAvailableAt) {
            status = "Disponível";
          } else {
            const diffMs = unlockAvailableAt - now;
            const hours = Math.floor(diffMs / (1000 * 60 * 60));
            const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
            timeRemaining = `${hours}h ${minutes}m`;
            status = "Bloqueada";
          }
        }
      }

      return {
        id: mission.id,
        title: mission.title,
        description: mission.description,
        xpReward: mission.xpReward,
        status,
        completed: isCompleted,
        unlockAvailableAt,
        timeRemaining,
        details: mission.details,
      };
    });

    res.json(formatted);
  } catch (err) {
    console.error("❌ Erro ao buscar missões:", err);
    res.status(500).json({ message: "Erro ao buscar missões do usuário" });
  }
});

/**
 * 🔹 POST /missions/complete
 * Marca missão como concluída e atualiza XP do usuário
 */
router.post("/complete", async (req, res) => {
  try {
    const { userId, missionId } = req.body;
    if (!userId || !missionId)
      return res.status(400).json({ message: "userId e missionId são obrigatórios" });

    // Verifica missão
    const mission = await prisma.mission.findUnique({ where: { id: Number(missionId) } });
    if (!mission) return res.status(404).json({ message: "Missão não encontrada" });

    // ✅ Garante que existe o vínculo antes de atualizar
    const existing = await prisma.userMission.findUnique({
      where: {
        userId_missionId: { userId: Number(userId), missionId: Number(missionId) },
      },
    });

    if (!existing) {
      await prisma.userMission.create({
        data: {
          userId: Number(userId),
          missionId: Number(missionId),
          completed: true,
          completedAt: new Date(),
        },
      });
    } else {
      await prisma.userMission.update({
        where: { userId_missionId: { userId: Number(userId), missionId: Number(missionId) } },
        data: { completed: true, completedAt: new Date() },
      });
    }

    // ✅ Atualiza XP do usuário individualmente
    const user = await prisma.user.findUnique({ where: { id: Number(userId) } });
    const gainedXp = mission?.xpReward || 50;
    const newXp = (user?.xp || 0) + gainedXp;
    let newLevel = user?.level || 1;
    if (newXp >= newLevel * 500) newLevel += 1;

    await prisma.user.update({
      where: { id: Number(userId) },
      data: { xp: newXp, level: newLevel },
    });

    res.json({ message: "Missão concluída com sucesso!", xpGanho: gainedXp });
  } catch (err) {
    console.error("❌ Erro ao completar missão:", err);
    res.status(500).json({ message: "Erro ao completar missão" });
  }
});

export default router;
