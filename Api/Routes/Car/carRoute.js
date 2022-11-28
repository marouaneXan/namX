const express=require('express')
const router = express.Router();
const {addCar}=require('../../Controllers/Car/carController')

router.post('/',addCar)

module.exports=router