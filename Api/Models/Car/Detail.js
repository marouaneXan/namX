const mongoose = require("mongoose");
const detailSchema = mongoose.Schema(
  {
    key: {
      type: String,
      required: [true, "Please add a key field"],
    },
    value: {
      type: String,
      required: [true, "Please add a value field"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Detail", detailSchema);