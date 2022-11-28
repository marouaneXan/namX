const express=require('express')
const router = express.Router();
const {getAllOrders}=require('../../Controllers/Order/orderController')

router.get('/',getAllOrders)

module.exports=router