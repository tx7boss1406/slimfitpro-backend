const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  // ✅ Relatório diário
  async dailyReport(userId) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const summary = await prisma.dailySummary.findUnique({
      where: { userId_date: { userId: Number(userId), date: today } }
    });

    return {
      date: today,
      missionsDone: summary?.missionsDone || 0,
      xpEarned: summary?.xpEarned || 0,
      streak: summary?.streak || 0,
      level: summary?.level || 1
    };
  },

  // ✅ Relatório semanal
  async weeklyReport(userId) {
    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7);

    const data = await prisma.dailySummary.findMany({
      where: {
        userId: Number(userId),
        date: { gte: sevenDaysAgo }
      },
      orderBy: { date: "asc" }
    });

    const totalXP = data.reduce((acc, d) => acc + d.xpEarned, 0);
    const totalMissions = data.reduce((acc, d) => acc + d.missionsDone, 0);

    return {
      range: { from: sevenDaysAgo, to: today },
      totalXP,
      totalMissions,
      days: data
    };
  },

  // ✅ Relatório mensal
  async monthlyReport(userId) {
    const today = new Date();
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(today.getDate() - 30);

    const data = await prisma.dailySummary.findMany({
      where: {
        userId: Number(userId),
        date: { gte: thirtyDaysAgo }
      },
      orderBy: { date: "asc" }
    });

    return {
      totalXP: data.reduce((a, d) => a + d.xpEarned, 0),
      totalMissions: data.reduce((a, d) => a + d.missionsDone, 0),
      days: data
    };
  },

  // ✅ Histórico de missões concluídas
  async missionHistory(userId) {
    return await prisma.userMission.findMany({
      where: { userId: Number(userId), completed: true },
      include: { mission: true },
      orderBy: { completedAt: "desc" }
    });
  },

  // ✅ Relatório geral (dashboard)
  async progressReport(userId) {
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) }
    });

    const completedMissions = await prisma.userMission.count({
      where: { userId: Number(userId), completed: true }
    });

    const activities = await prisma.userActivity.findMany({
      where: { userId: Number(userId) },
      orderBy: { createdAt: "desc" },
      take: 10
    });

    return {
      name: user.name,
      level: user.level,
      xp: user.xp,
      completedMissions,
      recentActivity: activities
    };
  }
};
