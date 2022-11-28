const express=require('express')
const router = express.Router();
const {addCar,getCars}=require('../../Controllers/Car/carController')

router.post('/',addCar).get('/',getCars)

module.exports=router