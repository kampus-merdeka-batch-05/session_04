const express = require("express")
const router = express.Router()

const shoesRouter = require("./shoes")
const shirtsRouter = require("./shirts")

router.use("/shoes", shoesRouter)
router.use("/shirts", shirtsRouter)

module.exports = router
