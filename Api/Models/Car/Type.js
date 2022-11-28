const mongoose = require("mongoose");
const typeSchema = mongoose.Schema(
  {
    car_type:{
        type:String,
        required:true,
    },
    details:{
        type:[mongoose.Schema.Types.ObjectId],
        required:true,
        ref:"Detail"
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Type", typeSchema);
