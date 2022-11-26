const express=require('express')
const router = express.Router();
const {login}=require('../../../Controllers/Admin/authController')

router.post('/login',login)

module.exports=router