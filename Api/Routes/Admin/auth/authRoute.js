const express=require('express')
const router = express.Router();
const {login}=require('../../../Controllers/Admin/auth')
router.get('/login',login)

module.exports=router