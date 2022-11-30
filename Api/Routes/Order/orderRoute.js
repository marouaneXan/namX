const express = require("express");
const router = express.Router();
const {
  getAllOrders,
  makeOrder,
  cancelOrder,
  getAllClientOrders,
} = require("../../Controllers/Order/orderController");
const { protectAdmin } = require("../../Middleware/Admin/AdminMiddleware");
const { protectClient } = require("../../Middleware/Client/ClientMiddleware");
router
  .get("/", protectAdmin, getAllOrders)
  .post("/:car_id/:client_id", protectClient, makeOrder)
  .delete("/:order_id/:car_id/:client_id", protectClient, cancelOrder)
  .get("/:client_id",getAllClientOrders)

module.exports = router;
