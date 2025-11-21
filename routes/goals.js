import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// GET - todas as metas do usuário
router.get("/:userId", async (req, res) => {
  try {
    const goals = await prisma.goal.findMany({
      where: { userId: Number(req.params.userId) },
    });

    return res.json(goals);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erro ao carregar metas" });
  }
});

// POST - criar nova meta
router.post("/", async (req, res) => {
  try {
    const { userId, title } = req.body;

    const goal = await prisma.goal.create({
      data: {
        userId: Number(userId),
        title,
        progress: 0,
      },
    });

    return res.json(goal);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erro ao criar meta" });
  }
});

// PUT - atualizar progresso da meta
router.put("/:id", async (req, res) => {
  try {
    const { progress } = req.body;

    const updated = await prisma.goal.update({
      where: { id: Number(req.params.id) },
      data: { progress },
    });

    return res.json(updated);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erro ao atualizar meta" });
  }
});

export default router;
