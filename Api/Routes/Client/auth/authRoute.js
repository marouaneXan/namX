const express=require('express')
const router = express.Router();
const {register,login}=require('../../../Controllers/Client/auth')
router.get('/login',(req,res)=>{
    res.send('login client')
})

module.exports=router