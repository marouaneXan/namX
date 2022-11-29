const express=require('express');
const router = express.Router();
const {addType, getTypes, updateType, deleteType}=require('../../Controllers/Car/typeController')
const {protectAdmin}=require('../../Middleware/Admin/AdminMiddleware')
router.post('/',protectAdmin,addType).get('/',getTypes).put('/:type_id',protectAdmin,updateType).delete('/:type_id',protectAdmin,deleteType)

module.exports=router