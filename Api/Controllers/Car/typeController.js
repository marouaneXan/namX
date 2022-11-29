const asyncHandler = require("express-async-handler");
const Type = require("../../Models/Car/Type");

// @desc POST addType
// @route /api/v1/types
// access private
const addType = asyncHandler(async (req, res) => {
  const { car_type, details, color } = req.body;
  if (!car_type || !details || !color) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const newType = await Type.create(req.body);
  if (newType) {
    res.status(200).json({
      message: "Type created successfully",
    });
  } else {
    res.status(400);
    throw new Error("Something wrong :(");
  }
});

// @desc GET getTypes
// @route /api/v1/types
// access private
const getTypes = asyncHandler(async (req, res) => {
  const types = await Type.find();
  types.length
    ? res.status(200).json(types)
    : res.status(400).json({
        message: "There is no types yet",
      });
});

//@desc PUT  Update type
//@route /api/v1/types/:type_id
//@access private
const updateType = asyncHandler(async (req, res) => {
  const type = await Type.findById(req.params.type_id);
  if (!type) {
    throw new Error("Type not found");
  }
  const updatedType = await Color.findByIdAndUpdate(
    req.params.type_id,
    req.body,
    {
      new: true,
    }
  );
  if (updatedType) {
    res.status(200).json({
      message: "Type updated successfully",
    });
  } else {
    res.status(400);
    throw new Error("Something wrong :(");
  }
});

//@desc DELETE type
//@route /api/v1/types/:type_id
//@access private
const deleteType = asyncHandler(async (req, res) => {
  const type = await type.findById(req.params.type_id);
  await type.remove();
  res.status(200).json({
    message: "Type deleted successfully",
  });
});

module.exports = {
  addType,
  getTypes,
  updateType,
  deleteType,
};
