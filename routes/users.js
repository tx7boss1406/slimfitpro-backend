// backend/routes/users.js
import express from "express";
import prisma from "../prisma/prismaClient.js";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

// ✅ Middleware para autenticar token JWT
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Token não fornecido" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "troque_esta_chave_por_uma_forte");
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token inválido" });
  }
};

// 🔹 Rota de resumo existente (mantida)
router.get("/:id/summary", async (req, res) => {
  try {
    const userId = Number(req.params.id);
    if (isNaN(userId)) return res.status(400).json({ message: "userId inválido" });

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

    const missions = await prisma.userMission.findMany({ where: { userId } });
    const totalMissions = await prisma.mission.count();
    const completedMissions = missions.filter((m) => m.completed).length;

    res.json({
      name: user.name,
      xp: user.xp,
      level: user.level,
      completedMissions,
      totalMissions,
    });
  } catch (err) {
    console.error("❌ Erro ao buscar resumo do usuário:", err);
    res.status(500).json({ message: "Erro interno" });
  }
});

// ✅ Configuração de upload/avatar e update profile

// configurar pasta de uploads (cria se não existir)
const uploadDir = path.join(process.cwd(), "uploads", "avatars");
fs.mkdirSync(uploadDir, { recursive: true });

// storage do multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `avatar-${req.userId || "unknown"}-${Date.now()}${ext}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("Apenas imagens são permitidas"));
    }
    cb(null, true);
  },
});

// ✅ Rota para buscar perfil autenticado (corrigida)
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    // garantir que userId seja número
    const userId = Number(req.userId);
    console.log("🔎 /profile -> userId do token:", req.userId, "→ Number:", userId);

    if (!userId || isNaN(userId)) {
      console.warn("⚠️ userId inválido no token:", req.userId);
      return res.status(401).json({ message: "Usuário não autenticado (userId inválido)" });
    }

    // pegar dados do usuário
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        level: true,
        xp: true,
        photo: true,
      },
    });

    if (!user) {
      console.warn("⚠️ Usuário não encontrado no DB:", userId);
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // pegar missões do usuário
    const userMissions = await prisma.userMission.findMany({
  where: { userId },
  include: {
    mission: true,
  },
});


    console.log("🧩 Missões encontradas para o usuário:", userMissions.length);

    // total e concluídas
    const totalMissions = await prisma.mission.count();
    const completedMissions = userMissions.filter((m) => m.completed).length;

    console.log("📊 totalMissions:", totalMissions, "completedMissions:", completedMissions);

    // resposta igual ao relatorios.tsx
    res.json({
      ...user,
      completedMissions,
      totalMissions,
      progress: totalMissions > 0 ? (completedMissions / totalMissions) * 100 : 0,
    });

  } catch (err) {
    console.error("❌ Erro ao buscar perfil:", err);
    res.status(500).json({ message: "Erro ao buscar perfil" });
  }
});

// ✅ PUT /users -> atualizar campos simples do usuário (ex: name)
router.put("/", authMiddleware, async (req, res) => {
  try {
    const userId = Number(req.userId);
    if (!userId) return res.status(401).json({ message: "Não autenticado" });

    const { name } = req.body;
    const data = {};
    if (typeof name === "string") data.name = name;

    const updated = await prisma.user.update({
      where: { id: userId },
      data,
      select: { id: true, name: true, email: true, level: true, xp: true, photo: true, unlocked: true },
    });

    return res.json({ user: updated });
  } catch (err) {
    console.error("❌ Erro ao atualizar usuário:", err);
    return res.status(500).json({ message: "Erro ao atualizar usuário" });
  }
});

// ✅ POST /users/avatar -> upload do avatar
router.post("/avatar", authMiddleware, upload.single("avatar"), async (req, res) => {
  try {
    const userId = Number(req.userId);
    if (!userId) return res.status(401).json({ message: "Não autenticado" });
    if (!req.file) return res.status(400).json({ message: "Arquivo não enviado" });

    const avatarUrl = `/uploads/avatars/${req.file.filename}`;

    // remover avatar antigo (opcional)
    try {
      const existing = await prisma.user.findUnique({ where: { id: userId }, select: { photo: true } });
      if (existing?.photo) {
        const oldPath = path.join(process.cwd(), existing.photo.startsWith("/") ? existing.photo : `/${existing.photo}`);
        if (oldPath.includes(path.join(process.cwd(), "uploads"))) {
          fs.rm(oldPath, { force: true }, () => {});
        }
      }
    } catch (e) {}

    const updated = await prisma.user.update({
      where: { id: userId },
      data: { photo: avatarUrl },
      select: { photo: true },
    });

    return res.json({ avatarUrl: updated.photo });
  } catch (err) {
    console.error("❌ Erro ao enviar avatar:", err);
    return res.status(500).json({ message: "Erro ao enviar avatar" });
  }
});

export default router;
