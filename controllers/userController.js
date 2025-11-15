// controllers/userController.js
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// Middleware para autenticar token
export const authMiddleware = (req, res, next) => {
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

// ✅ Buscar dados do usuário logado
export const getUserProfile = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      select: { id: true, name: true, email: true, level: true, xp: true, photo: true },
    });

    if (!user) return res.status(404).json({ message: "Usuário não encontrado" });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao buscar perfil" });
  }
};
