const express=require('express')
const router = express.Router();
const {addDetails,getDetails,updateDetail}=require('../../Controllers/Car/detailController')

router.post('/',addDetails).get('/',getDetails).put('/:detail_id',updateDetail)

module.exports=router