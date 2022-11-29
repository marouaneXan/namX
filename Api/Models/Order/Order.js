const mongoose=require('mongoose')
const orderSchema=mongoose.Schema({
    order_date:{
        type:String,
        required:true
    },
    order_time:{
        type:String,
        required:true
    },
    car:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Car"
    },
    client:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Client"
    },
    confirmed:{
        type:Boolean,
        default:false
    },
})
module.exports = mongoose.model("Order",orderSchema)