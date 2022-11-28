const mongoose = require("mongoose");
const carSchema = mongoose.Schema(
  {
    details: [
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
      ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Car", carSchema);
