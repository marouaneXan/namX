const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @desc POST register
// @route /api/v1/admin/auth/register
// access private
const register = asyncHandler(async (req, res) => {
    res.send('register')
});

module.exports = {
    register,
  };