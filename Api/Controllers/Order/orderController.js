const asyncHandler = require("express-async-handler");
const Car = require("../../Models/Car/Car");
const Client = require("../../Models/Client/Client");
const Order = require("../../Models/Order/Order");
//@desc GET orders
//@route /api/v1/orders
//@access private
const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find();
  orders.length
    ? res.status(200).json(orders)
    : res.status(400).json({
        message: "There is no orders yet",
      });
});

//@desc POST Order
//@route /api/v1/orders
//@access public
const makeOrder = asyncHandler(async (req, res) => {
  const time_now = new Date().toLocaleTimeString();
  const date_now = new Date().toLocaleDateString("sv");
  const car = await Car.findById(req.params.car_id);
  const client = await Client.findById(req.params.client_id);
  if (!car || !client) {
    res.status(400);
    throw new Error("Order failed");
  }
  const order = await Order.create({
    order_date: date_now,
    order_time: time_now,
    car: car._id,
    client: client._id,
  });
  if (order) {
    res
      .status(200)
      .json({ message: "Your order has been confirmed successfully" });
  } else res.status(400).json({ message: "Order failed" });
});
module.exports = {
  getAllOrders,
  makeOrder
};
