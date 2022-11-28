const asyncHandler = require("express-async-handler");
const Detail = require("../../Models/Car/Detail");

// @desc POST addDetails
// @route /api/v1/details
// access private
const addDetails = asyncHandler(async (req, res) => {
  const {key,value}=req.body
  const _exist=await Detail.findOne(req.body)
  if (!key || !value) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const details = await Detail.create(req.body);
  if (details && !_exist) {
    res.status(200).json({
      message: "details created successfully",
    });
  } else {
    res.status(400);
    throw new Error("Enter different value :(");
  }
});

//@desc PUT  Update detail
//@route /api/v1/details/:detail_id
//@access private
const updateDetail = asyncHandler(async (req, res) => {
  const detail = await Detail.findById(req.params.detail_id);
  if (!detail) {
    throw new Error("Detail not found");
  }
  const updatedDetail = await Detail.findByIdAndUpdate(
    req.params.detail_id,
    req.body,
    {
      new: true,
    }
  );
  if (updatedDetail) {
    res.status(200).json({
      message: "Detail updated successfully",
    });
  }else{
    res.status(400)
    throw new Error('Something wrong :(')
  }
});

// @desc GET getDetails
// @route /api/v1/details
// access private
const getDetails = asyncHandler(async (req, res) => {
  const details = await Detail.find();
  res.status(200).json(details);
});

module.exports = {
  addDetails,
  getDetails,
  updateDetail,
};
