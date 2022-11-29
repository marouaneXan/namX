const express=require('express')
const router = express.Router();
const {addCar,getCars, updateCar, deleteCar}=require('../../Controllers/Car/carController')
const {protectAdmin}=require('../../Middleware/Admin/AdminMiddleware')

router.post('/:type_id',protectAdmin,addCar).get('/',getCars).put('/:car_id',protectAdmin,updateCar).delete('/:car_id',protectAdmin,deleteCar)

module.exports=router