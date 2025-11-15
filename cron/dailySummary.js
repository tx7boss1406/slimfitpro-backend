const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function generateDailySummary() {
  const users = await prisma.user.findMany();

  for (const user of users) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const activities = await prisma.userActivity.findMany({
      where: {
        userId: user.id,
        createdAt: {
          gte: today
        }
      }
    });

    const missionsDone = activities.filter(a => a.type === "mission_completed").length;
    const xpEarned = activities
      .filter(a => a.type === "xp_gained")
      .reduce((acc, a) => acc + (a.metadata?.amount || 0), 0);

    await prisma.dailySummary.upsert({
      where: { userId_date: { userId: user.id, date: today } },
      create: {
        userId: user.id,
        date: today,
        missionsDone,
        xpEarned,
        streak: missionsDone > 0 ? (user.streak || 0) + 1 : 0,
        level: user.level
      },
      update: {
        missionsDone,
        xpEarned,
        level: user.level
      }
    });

    console.log(`✅ Summary gerado para o usuário ${user.id}`);
  }
}

generateDailySummary();
