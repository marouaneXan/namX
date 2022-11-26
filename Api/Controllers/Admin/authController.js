const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const Admin = require('../../Models/Admin/Admin')
const generateToken = require('../../Utils/generateToken')

// @desc POST Login
// @route /api/v1/admin/auth/login
// access private
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const admin = await Admin.findOne({ email })
  
  if (admin && (await bcrypt.compare(password, admin.password))) {
      res.json({
          _id: admin.id,
          token: generateToken(admin.id),
          message: "Admin loged successfully"
      })
  } else {
      res.status(400)
      throw new Error('Invalid admin data')
  } 
});

module.exports = {
    login,
};
