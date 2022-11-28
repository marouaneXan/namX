const asyncHandler = require("express-async-handler");
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
module.exports = {
  getAllOrders,
};
