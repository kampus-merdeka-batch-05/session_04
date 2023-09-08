const express = require("express")
const router = express.Router()
const shirts = require("../data/shirts.json")

router.get("/", (req, res) => {
  try {
    res.send(shirts)
  } catch (error) {
    res.send(error)
  }
})

router.get("/:id", (req, res) => {

  const data = shirts.find(item => item.id == req.params.id)
  
  if (data) {
    res.send(data)
  } else {
    res.send({ message: "Data not found"})
  }
})

module.exports = router
