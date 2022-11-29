const express=require('express')
const router = express.Router();
const {addColor,getColors, updateColor, deleteColor}=require('../../Controllers/Car/colorController')
const {protectAdmin}=require('../../Middleware/Admin/AdminMiddleware')
router.post('/',protectAdmin,addColor).get('/',protectAdmin,getColors).put('/:car_id',protectAdmin,updateColor).delete('/:car_id',protectAdmin,deleteColor)

module.exports=router