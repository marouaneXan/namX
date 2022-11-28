const express=require('express')
const router = express.Router();
const {addDetails}=require('../../Controllers/Car/detailController')

router.post('/',addDetails)

module.exports=router