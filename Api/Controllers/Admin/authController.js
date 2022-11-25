const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @desc POST Login
// @route /api/v1/admin/auth/login
// access private
const login = asyncHandler(async (req, res) => {
    
});

module.exports = {
    login,
  };
