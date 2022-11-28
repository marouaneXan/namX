const mongoose = require("mongoose");
const carSchema = mongoose.Schema(
  {
    car_name: {
      type: String,
      required: true,
    },
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Type",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Car", carSchema);
