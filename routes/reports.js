import express from "express";
import prisma from "../prisma/prismaClient.js";

const router = express.Router();

/**
 * ✅ RELATÓRIO GERAL DO USUÁRIO
 */
router.get("/overview/:userId", async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    const missionsCompleted = await prisma.userMission.count({
      where: { userId, completed: true },
    });

    const firstMission = await prisma.userMission.findFirst({
      where: { userId, completed: true },
      orderBy: { completedAt: "asc" }
    });

    let daysActive = 0;
    if (firstMission) {
      const diff = Date.now() - new Date(firstMission.completedAt).getTime();
      daysActive = Math.ceil(diff / 86400000);
    }

    return res.json({
      xp: user?.xp || 0,
      level: user?.level || 1,
      missionsCompleted,
      daysActive,
    });

  } catch (err) {
    console.error("❌ Erro no relatório geral:", err);
    return res.status(500).json({ message: "Erro ao gerar relatório" });
  }
});

/**
 * ✅ RELATÓRIO DE MISSÕES
 */
router.get("/missions/:userId", async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    const missions = await prisma.mission.findMany({
      orderBy: { id: "asc" },
    });

    const userMissions = await prisma.userMission.findMany({
      where: { userId },
    });

    const formatted = missions.map((m) => ({
      id: m.id,
      title: m.title,
      dayNumber: m.dayNumber,
      xp: m.xpReward,
      completed: userMissions.some((um) => um.missionId === m.id && um.completed),
      completedAt: userMissions.find((um) => um.missionId === m.id)?.completedAt || null,
    }));

    return res.json(formatted);

  } catch (err) {
    console.error("❌ Erro no relatório de missões:", err);
    return res.status(500).json({ message: "Erro ao gerar relatório de missões" });
  }
});

/**
 * ✅ RELATÓRIO DE CONSISTÊNCIA
 */
router.get("/consistency/:userId", async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    const completed = await prisma.userMission.findMany({
      where: { userId, completed: true },
    });

    const uniqueDays = new Set(
      completed.map((m) => new Date(m.completedAt).toISOString().split("T")[0])
    );

    return res.json({
      totalDays: uniqueDays.size,
      days: [...uniqueDays],
    });

  } catch (err) {
    console.error("❌ Erro no relatório de consistência:", err);
    return res.status(500).json({ message: "Erro ao gerar relatório" });
  }
});

export default router;
