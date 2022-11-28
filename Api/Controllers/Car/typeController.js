const asyncHandler = require("express-async-handler");
const Type = require("../../Models/Car/Type");

// @desc POST addType
// @route /api/v1/types
// access private
const addType = asyncHandler(async (req, res) => {
  const { car_type,details,color } = req.body;
  if (!car_type || !details || !color) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const newType = await Type.create(req.body);
  if (newType) {
    res.status(200).json({
      message: "Type created successfully",
    });
  }else{
    res.status(400);
    throw new Error("Something wrong :(");
  }
});

// @desc GET getTypes
// @route /api/v1/types
// access private
const getTypes = asyncHandler(async (req, res) => {
  const types = await Type.find();
  res.status(200).json(types);
});

module.exports = {
  addType,
  getTypes
};
