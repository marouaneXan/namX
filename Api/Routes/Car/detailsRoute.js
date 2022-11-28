const express=require('express')
const router = express.Router();
const {addDetails,getDetails}=require('../../Controllers/Car/detailController')

router.post('/',addDetails).get('/',getDetails)

module.exports=router