const express=require('express');
const router = express.Router();
const {addType, getTypes}=require('../../Controllers/Car/typeController')

router.post('/',addType).get('/',getTypes)

module.exports=router