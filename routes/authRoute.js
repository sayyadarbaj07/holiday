const { continuewithGoogle } = require("../controllers/authController")

const router=require("express").Router()

 router
        .post("/continue-with-google",continuewithGoogle)

module.exports=router