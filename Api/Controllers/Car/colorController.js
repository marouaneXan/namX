const asyncHandler = require("express-async-handler");
const Color = require("../../Models/Car/Color");

// @desc POST addColor
// @route /api/v1/colors
// access private
const addColor = asyncHandler(async (req, res) => {
  const { desc } = req.body;
  if (!desc) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const newColor = await Color.create(req.body);
  if (newColor) {
    res.status(200).json({
      message: "color created successfully",
    });
  }else{
    res.status(400);
    throw new Error("Something wrong :(");
  }
});

// @desc GET getColors
// @route /api/v1/colors
// access private
const getColors = asyncHandler(async (req, res) => {
  const colors = await Color.find();
  res.status(200).json(colors);
});

//@desc PUT  Update car
//@route /api/v1/colors/:car_id
//@access private
const updateColor = asyncHandler(async (req, res) => {
  const color = await Color.findById(req.params.color_id);
  if (!color) {
    throw new Error("Color not found");
  }
  const updatedColor = await Color.findByIdAndUpdate(
    req.params.color_id,
    req.body,
    {
      new: true,
    }
  );
  if (updatedColor) {
    res.status(200).json({
      message: "Color updated successfully",
    });
  }else{
    res.status(400)
    throw new Error('Something wrong :(')
  }
});

//@desc DELETE Color
//@route /api/v1/colors/:color_id
//@access private
const deleteColor = asyncHandler(async (req, res) => {
  const color = await color.findById(req.params.color_id);
  await Color.remove();
  res.status(200).json({
    message: "color deleted successfully",
  });
});

module.exports = {
  addColor,
  getColors,
  updateColor,
  deleteColor
};
