const asyncHandler=require("express-async-handler")
const jwt=require("jsonwebtoken")
exports.protectedRoute=asyncHandler(async(req,res,next)=>{
    const {reavler}=req.cookies
    if(!reavler){
       
        return res.status(400).json({message:"No Cookie Found"})
    }
    jwt.verify(reavler,process.env.JWT_KEY,(err,decode)=>{
        if(err){
            return res.status(400).json({message:err.message  || "JWT Error"})
        }
        req.body.userId=decode.userId
        next()
    })
})