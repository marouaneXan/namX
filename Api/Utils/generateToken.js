const jwt = require("jsonwebtoken");
//Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });
};
module.exports = generateToken