const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema(
  {
    
  },
  {
    collection: "dashboard",
    timestamps: true,
  }
);

module.exports = mongoose.model("DashboardData", dashboardSchema);
