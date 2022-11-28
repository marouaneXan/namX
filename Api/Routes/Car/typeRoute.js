const express=require('express');
const router = express.Router();
const {addType, getTypes, updateType, deleteType}=require('../../Controllers/Car/typeController')

router.post('/',addType).get('/',getTypes).put('/:type_id',updateType).delete('/:type_id',deleteType)

module.exports=router