const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require('../../Models/Client/Client')
const generateToken = require('../../Utils/generateToken')

// @desc POST register
// @route /api/v1/client/auth/register
// access public
const register = asyncHandler(async (req, res) => {
    const { fname, lname, email, birthday, phone, adress, city, password } = req.body
    
    if (!fname || !lname  || !email || !birthday || !phone || !adress || !city || !password) { 
        res.status(400)
        throw new Error('Please add all fields')
    }
    
    const userExists = await User.findOne({ email })
    
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        fname,
        lname,
        email,
        birthday,
        phone,
        adress,
        city,
        password: hashedPassword,
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            token: generateToken(user.id),
            message: "Account created succefully"
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})
// @desc POST register
// @route /api/v1/client/auth/login
// access public
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            token: generateToken(user.id),
            message: "User loged successfully"
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    } 
});

module.exports = {
    register,
    login
};