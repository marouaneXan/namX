const jwt = require("jsonwebtoken");
//Generate JWT
const generateToken = (client_id) => {
  return jwt.sign({ client_id }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });
};
module.exports = generateToken