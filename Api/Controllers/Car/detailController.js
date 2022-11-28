const asyncHandler = require("express-async-handler");
const Detail = require("../../Models/Car/Detail");

// @desc POST addDetails
// @route /api/v1/details
// access private
const addDetails = asyncHandler(async (req, res) => {
    if(!req.body.details.key || !req.body.details.value){
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

module.exports = {
    addDetails
};