import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// GET - dados nutricionais do dia
router.get("/:userId/today", async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    const today = new Date().toISOString().split("T")[0];

    const data = await prisma.nutrition.findFirst({
      where: { userId, date: new Date(today) },
    });

    return res.json(
      data || {
        calories: 0,
        protein: 0,
        carbs: 0,
        fats: 0,
      }
    );
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erro ao carregar nutrição" });
  }
});

// POST - atualizar nutrição do dia
router.post("/", async (req, res) => {
  try {
    const { userId, calories, protein, carbs, fats } = req.body;

    const today = new Date().toISOString().split("T")[0];

    const existing = await prisma.nutrition.findFirst({
      where: { userId: Number(userId), date: new Date(today) },
    });

    let updated;

    if (existing) {
      updated = await prisma.nutrition.update({
        where: { id: existing.id },
        data: { calories, protein, carbs, fats },
      });
    } else {
      updated = await prisma.nutrition.create({
        data: {
          userId: Number(userId),
          calories,
          protein,
          carbs,
          fats,
          date: new Date(today),
        },
      });
    }

    return res.json(updated);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erro ao salvar nutrição" });
  }
});

export default router;
