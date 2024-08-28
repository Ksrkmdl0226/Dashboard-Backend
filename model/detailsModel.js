const mongoose = require("mongoose");

const detailsSchema = new mongoose.Schema(
  {
    
  },
  {
    collection: "details",
    timestamps: true,
  }
);

module.exports = mongoose.model("DetailsData", detailsSchema);
