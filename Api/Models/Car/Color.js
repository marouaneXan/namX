const mongoose = require("mongoose");
const colorSchema = mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Color", colorSchema);
