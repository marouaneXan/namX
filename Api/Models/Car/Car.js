const mongoose = require("mongoose");
const carSchema = mongoose.Schema(
  {
    type:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Type"
    },
    color:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Color"
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Car", carSchema);
