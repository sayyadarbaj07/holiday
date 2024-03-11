const asyncHandler=require("express-async-handler")
const Holiday = require("../modals/Holiday")
exports.getTours=asyncHandler(async(req,res)=>{
    const result=await Holiday.find()
    res.json({message:"Tour Fetch success",result})
})
exports.getToursDetails=asyncHandler(async(req,res)=>{
    const {id}=req.params
    const result=await Holiday.findById(id)
    res.json({message:"Tour Details Fetch success",result})
})
