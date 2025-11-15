// backend/routes/rewards.js
import express from "express";
import prisma from "../prisma/prismaClient.js";

const router = express.Router();

/**
 * 🔹 GET /rewards/:userId
 * Retorna todas as recompensas e indica quais o usuário já desbloqueou
 * Agora também libera automaticamente recompensas baseadas no número de missões concluídas
 */
router.get("/:userId", async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    if (isNaN(userId)) return res.status(400).json({ message: "ID inválido." });

    // 🔸 Busca todas as recompensas existentes
    const rewards = await prisma.reward.findMany();

    // 🔸 Busca missões concluídas do usuário
    const userMissions = await prisma.userMission.findMany({
      where: { userId },
    });
    const completedCount = userMissions.filter((m) => m.completed).length;

    // 🔸 Busca recompensas já desbloqueadas
    const unlocked = await prisma.userReward.findMany({
      where: { userId },
      select: { rewardId: true, unlockedAt: true },
    });

    const unlockedIds = unlocked.map((r) => r.rewardId);

    // 🔸 Libera automaticamente recompensas baseadas em requiredDays
    for (const reward of rewards) {
      if (
        reward.requiredDays &&
        completedCount >= reward.requiredDays &&
        !unlockedIds.includes(reward.id)
      ) {
        await prisma.userReward.create({
          data: {
            userId,
            rewardId: reward.id,
            unlockedAt: new Date(),
          },
        });
        unlockedIds.push(reward.id);
      }
    }

    // 🔸 Recarrega recompensas já desbloqueadas (depois de possíveis novas criações)
    const updatedUnlocked = await prisma.userReward.findMany({
      where: { userId },
      select: { rewardId: true, unlockedAt: true },
    });

    // 🔸 Formata resposta final
    const formatted = rewards.map((r) => ({
      ...r,
      unlocked: updatedUnlocked.some((u) => u.rewardId === r.id),
      unlockedAt: updatedUnlocked.find((u) => u.rewardId === r.id)?.unlockedAt || null,
    }));

    res.json(formatted);
  } catch (err) {
    console.error("❌ Erro ao buscar recompensas:", err);
    res.status(500).json({ message: "Erro ao buscar recompensas." });
  }
});

/**
 * 🔹 POST /rewards/claim
 * Marca uma recompensa como desbloqueada (quando o usuário conquista)
 */
router.post("/claim", async (req, res) => {
  try {
    const { userId, rewardId } = req.body;

    if (!userId || !rewardId)
      return res.status(400).json({ message: "userId e rewardId são obrigatórios." });

    // Verifica se já foi desbloqueada
    const already = await prisma.userReward.findFirst({
      where: { userId: Number(userId), rewardId: Number(rewardId) },
    });

    if (already) {
      return res.status(200).json({ message: "Recompensa já desbloqueada." });
    }

    // Cria registro com unlocked = true
await prisma.userReward.create({
  data: {
    userId: Number(userId),
    rewardId: Number(rewardId),
    unlocked: true,
    unlockedAt: new Date(),
  },
});


    res.json({ message: "Recompensa desbloqueada com sucesso!" });
  } catch (err) {
    console.error("Erro ao desbloquear recompensa:", err);
    res.status(500).json({ message: "Erro interno ao reivindicar recompensa." });
  }
});

export default router;
