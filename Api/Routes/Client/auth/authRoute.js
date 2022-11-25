const express=require('express')
const router = express.Router();
const {register,login}=require('../../../Controllers/Client/authController')
router.post('/register',register).post('/login',login)

module.exports=router