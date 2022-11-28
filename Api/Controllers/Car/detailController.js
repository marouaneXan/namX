const asyncHandler = require("express-async-handler");
const Detail = require("../../Models/Car/Detail");

// @desc POST addDetails
// @route /api/v1/details
// access private
const addDetails = asyncHandler(async (req, res) => {
    if(!req.body){
        res.status(400)
        throw new Error('Please add all fields')
    }
    const details=await Detail.create(req.body)
    if(details){
        res.status(200).json({
            message:"details created successfully"
        })
    }else{
        res.status(400)
        throw new Error("Something wrong :(")
    }
})

// @desc GET getDetails
// @route /api/v1/details
// access private
const getDetails = asyncHandler(async (req, res) => {
    const details=await Detail.find()
    res.status(200).json(details)
})


module.exports = {
    addDetails,
    getDetails
};