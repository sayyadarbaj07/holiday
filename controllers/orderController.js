const asyncHandler=require("express-async-handler")
const Order = require("../modals/Order")

exports.placeorder=asyncHandler(async(req,res)=>{
    const {userId,holidayId}=req.body
        await Order.create(req.body)

    res.json({message:"order place success"})
})
exports.userOredrHistory=asyncHandler(async(req,res)=>{
    
       const result = await Order.find({userId:req.body.userId}).populate("holidayId")

    res.json({message:"data  success",result})
})

