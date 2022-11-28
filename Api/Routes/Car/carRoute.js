const express=require('express')
const router = express.Router();
const {addCar,getCars, updateCar, deleteCar}=require('../../Controllers/Car/carController')

router.post('/:type_id',addCar).get('/',getCars).put('/:car_id',updateCar).delete('/:car_id',deleteCar)

module.exports=router