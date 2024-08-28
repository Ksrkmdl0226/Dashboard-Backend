const dashboardData = require("../model/dashboardModel");
const detailsData = require("../model/detailsModel")

const dashboardController = {
  getDashBoardDetails: async (req, res) => {
    try {
      let data = await dashboardData.find({});
      res.status(200).json({ length: data.length, data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  getDetails: async (req, res) => {
    try {
      let data = await detailsData.find({});
      res.status(200).json({ length: data.length, data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

module.exports = dashboardController;

