const reportService = require("../services/reportService");

module.exports = {
  async getDailyReport(req, res) {
    const { userId } = req.params;
    try {
      const result = await reportService.dailyReport(userId);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao gerar relatório diário" });
    }
  },

  async getWeeklyReport(req, res) {
    const { userId } = req.params;
    try {
      const result = await reportService.weeklyReport(userId);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao gerar relatório semanal" });
    }
  },

  async getMonthlyReport(req, res) {
    const { userId } = req.params;
    try {
      const result = await reportService.monthlyReport(userId);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao gerar relatório mensal" });
    }
  },

  async getMissionHistory(req, res) {
    const { userId } = req.params;
    try {
      const result = await reportService.missionHistory(userId);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao gerar histórico das missões" });
    }
  },

  async getProgressReport(req, res) {
    const { userId } = req.params;
    try {
      const result = await reportService.progressReport(userId);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao gerar relatório de progresso" });
    }
  },
};
