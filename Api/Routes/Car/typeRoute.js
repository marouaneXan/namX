const express=require('express');
const router = express.Router();
const {addType, getTypes, updateType}=require('../../Controllers/Car/typeController')

router.post('/',addType).get('/',getTypes).put('/:type_id',updateType)

module.exports=router