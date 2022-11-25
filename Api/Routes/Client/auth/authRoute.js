const express=require('express')
const router = express.Router();
const {register,login}=require('../../../Controllers/Client/auth')
router.post('/register',register).post('/login',login)

module.exports=router