//Generate JWT
const generateToken = (admin_id) => {
  return jwt.sign({ admin_id }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });
};
module.exports=generateToken
