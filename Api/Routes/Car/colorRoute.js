const express=require('express')
const router = express.Router();
const {addColor,getColors, updateColor, deleteColor}=require('../../Controllers/Car/colorController')

router.post('/',addColor).get('/',getColors).put('/:car_id',updateColor).delete('/:car_id',deleteColor)

module.exports=router