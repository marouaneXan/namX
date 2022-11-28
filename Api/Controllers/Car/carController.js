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

//@desc PUT  Update car
//@route /api/v1/cars/:car_id
//@access private
const updateCar = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.car_id);
  if (!car) {
    throw new Error("Car not found");
  }
  const updatedCar = await Car.findByIdAndUpdate(
    req.params.car_id,
    req.body,
    {
      new: true,
    }
  );
  if (updatedCar) {
    res.status(200).json({
      message: "Car updated successfully",
    });
  }else{
    res.status(400)
    throw new Error('Something wrong :(')
  }
});

module.exports = {
  addCar,
  getCars,
  updateCar
};
