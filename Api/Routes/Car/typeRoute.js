const express=require('express')
const router = express.Router();
const {addType}=require('../../Controllers/Car/typeController')

router.post('/',addType)

module.exports=router