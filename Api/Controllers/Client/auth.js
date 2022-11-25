const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @desc POST register
// @route /api/v1/client/auth/register
// access public
const register = asyncHandler(async (req, res) => {
    res.send('register')
});
// @desc POST register
// @route /api/v1/client/auth/login
// access public
const login = asyncHandler(async (req, res) => {
    res.send('login')
});

module.exports = {
    register,
    login
  };