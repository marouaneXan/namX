const asyncHandler = require("express-async-handler");
const Car = require("../../Models/Car/Car");

// @desc POST addCar
// @route /api/v1/cars
// access private
const addCar = asyncHandler(async (req, res) => {
  const { car_name } = req.body;
  if (!car_name) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const newCar = await Car.create(req.body);
  if (newCar) {
    res.status(200).json({
      message: "car created successfully",
    });
  }else{
    res.status(400);
    throw new Error("Something wrong :(");
  }
});

// @desc GET getCars
// @route /api/v1/cars
// access private
const getCars = asyncHandler(async (req, res) => {
  const cars = await Car.find();
  res.status(200).json(cars);
});

module.exports = {
  addCar,
  getCars
};
