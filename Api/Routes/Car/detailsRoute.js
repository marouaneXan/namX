const express=require('express')
const router = express.Router();
const {addDetails,getDetails,updateDetail}=require('../../Controllers/Car/detailController')
const {protectAdmin}=require('../../Middleware/Admin/AdminMiddleware')

router.post('/',protectAdmin,addDetails).get('/',getDetails).put('/:detail_id',protectAdmin,updateDetail)

module.exports=router