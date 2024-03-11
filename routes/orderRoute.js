const { placeorder, userOredrHistory } = require("../controllers/orderController")
const { protectedRoute } = require("../utils/protected")

const router = require("express").Router()

router
    .post("/place-order", protectedRoute, placeorder)
    .get("/history", protectedRoute, userOredrHistory)
    

module.exports = router