const express=require('express')
const router = express.Router();
const {getAllOrders, makeOrder, cancelOrder}=require('../../Controllers/Order/orderController')
const {protectAdmin}=require('../../Middleware/Admin/AdminMiddleware')
router.get('/',protectAdmin,getAllOrders).post('/:car_id/:client_id',protectAdmin,makeOrder).delete('/:order_id/:car_id/:client_id',protectAdmin,cancelOrder)

module.exports=router