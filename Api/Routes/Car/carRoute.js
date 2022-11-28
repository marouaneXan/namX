const express=require('express')
const router = express.Router();
const {addCar,getCars, updateCar}=require('../../Controllers/Car/carController')

router.post('/',addCar).get('/',getCars).put('/:car_id',updateCar)

module.exports=router