// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

import missionRoutes from "./routes/missions.js";
import rewardRoutes from "./routes/rewards.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import reportRoutes from "./routes/reports.js"; // ✅ ROTAS DE RELATÓRIOS
import goalRoutes from "./routes/goals.js";
import nutritionRoutes from "./routes/nutrition.js";

import jwt from "jsonwebtoken";

dotenv.config();

const prisma = new PrismaClient();
const app = express();
// permitir somente o frontend (Vercel)
const allowedOrigins = [
  process.env.ALLOWED_ORIGINS || "https://slimfitpro-alpha.vercel.app"
];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // allow non-browser tools (curl)
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("CORS not allowed"), false);
  },
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization"]
}));
app.use(express.json());

// ✅ Rotas existentes
app.use("/missions", missionRoutes);
app.use("/rewards", rewardRoutes);
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
// ✅ Nova rota: RELATÓRIOS
app.use("/reports", reportRoutes);
app.use("/goals", goalRoutes);
app.use("/nutrition", nutritionRoutes);

// ✅ Rota de teste
app.get("/", (req, res) => res.send("API SlimFitPro rodando 🚀"));

// ✅ Rota protegida - exemplo
app.get("/auth/me", async (req, res) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ message: "Sem token" });

    const token = auth.split(" ")[1];
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET || "troque_esta_chave_por_uma_forte"
    );

    const user = await prisma.user.findUnique({
      where: { id: Number(payload.userId) },
    });

    if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

    return res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      xp: user.xp,
      level: user.level,
      unlocked: user.unlocked,
    });
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Token inválido ou expirado" });
  }
});

// ✅ Atualizar progresso do usuário
app.post("/user/progress", async (req, res) => {
  try {
    const { token, xpGain, unlockKey } = req.body;
    if (!token) return res.status(401).json({ message: "Token necessário" });

    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET || "troque_esta_chave_por_uma_forte"
    );

    const user = await prisma.user.findUnique({
      where: { id: Number(payload.userId) },
    });

    if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

    let newXp = user.xp + (xpGain || 0);
    let level = user.level;

    while (newXp >= 100) {
      newXp -= 100;
      level += 1;
    }

    let unlocked = user.unlocked ?? [];
    if (unlockKey && !unlocked.includes(unlockKey)) {
      unlocked.push(unlockKey);
    }

    const updated = await prisma.user.update({
      where: { id: user.id },
      data: { xp: newXp, level, unlocked },
    });

    return res.json({
      message: "Progresso atualizado",
      xp: updated.xp,
      level: updated.level,
      unlocked: updated.unlocked,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erro ao atualizar progresso" });
  }
});

// ✅ Porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Servidor backend rodando na porta ${PORT}`)
);
