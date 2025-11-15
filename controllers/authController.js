// backend/controllers/authController.js
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// ✅ Registrar usuário
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, level } = req.body;

    // Verifica se usuário já existe
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser)
      return res.status(400).json({ message: "Usuário já existe" });

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria usuário
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        xp: 0,
        level: Number(level), // garante que é número
        unlocked: [],
      },
    });

    res.status(201).json({ message: "Conta criada com sucesso", userId: user.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao registrar usuário" });
  }
};

// ✅ Login usuário
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Senha incorreta" });

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || "troque_esta_chave_por_uma_forte",
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email, level: user.level, xp: user.xp },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao fazer login" });
  }
};
