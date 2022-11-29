const express=require('express')
const router = express.Router();
const {getAllOrders, makeOrder, cancelOrder}=require('../../Controllers/Order/orderController')

router.get('/',getAllOrders).post('/:car_id/:client_id',makeOrder).delete('/:order_id/:car_id/:client_id',cancelOrder)

module.exports=router