const mongoose = require("mongoose");
const clientSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "Please add a first name field"],
    },
    lname: {
      type: String,
      required: [true, "Please add a last name field"],
    },
    email: {
      type: String,
      required: [true, "Please add a email field"],
      unique: true,
    },
    birthday: {
      type: String,
      required: [true, "Please add a birthday field"],
    },
    phone: {
      type: String,
      required: [true, "Please add a phone field"],
    },
    adress: {
      type: String,
      required: [true, "Please add a adress field"],
    },
    city: {
      type: String,
      required: [true, "Please add a city field"],
    },
    password: {
      type: String,
      required: [true, "Please add a password field"],
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Client", clientSchema);
