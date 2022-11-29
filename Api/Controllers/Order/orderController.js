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
  const {quantity}=req.body
  if (!car || !client || !quantity) {
    res.status(400);
    throw new Error("Order failed");
  }
  const order = await Order.create({
    order_date: date_now,
    order_time: time_now,
    car: car._id,
    client: client._id,
    quantity
  });
  if (order) {
    res
      .status(200)
      .json({ message: "Your order has been confirmed successfully" });
  } else res.status(400).json({ message: "Order failed" });
});

//@desc DELETE Order
//@route /api/v1/orders/order_id/car_id/client_id
//@access public
const cancelOrder = asyncHandler(async (req, res) => {
  const time_now = new Date().toLocaleTimeString();
  const order = await Order.findById(req.params.order_id);
  const car = await Car.findById(req.params.car_id);
  const client = await Client.findById(req.params.client_id);
  if (!order || !car || !client) {
    res.status(400);
    throw new Error("Canceling order failed :(");
  }
  const difference_time = diff(order.order_time, time_now);
  if (difference_time < "01:00:00") {
    order.remove();
    res.status(200).json({ message: "Canceling order successffuly" });
  } else {
    res.status(400);
    res.json({ message: "You cannot cancel this order :(" });
  }
});

// difference btween two times
function diff(start, end) {
  start = start.split(":");
  end = end.split(":");
  var startDate = new Date(0, 0, 0, start[0], start[1], 0);
  var endDate = new Date(0, 0, 0, end[0], end[1], 0);
  var diff = endDate.getTime() - startDate.getTime();
  var hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * 1000 * 60 * 60;
  var minutes = Math.floor(diff / 1000 / 60);

  return (
    (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes
  );
}
module.exports = {
  getAllOrders,
  makeOrder,
  cancelOrder,
};
