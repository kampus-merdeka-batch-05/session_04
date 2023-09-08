const express = require("express")
const router = express.Router()
const fs = require("fs")

router.get("/", (req, res) => {
  try {
    const shoes = fs.readFileSync("./data/shoes.json", "utf8")
  
    const shoesParsed = JSON.parse(shoes)
  
    res.send(shoesParsed)
    
  } catch (error) {
    res.send(error.message)
  }

})

//get shoes by id
router.get("/:shoe_id", (req, res) => {

  try {
    const shoeId = +req.params.shoe_id
  
    const shoes = fs.readFileSync("./data/shoes.json", "utf8")
  
    const shoesParsed = JSON.parse(shoes)
  
    const data = shoesParsed.find(item => item.id === shoeId)
  
    if (data) {
      res.send(data)
    } else {
      res.send({message: "Data not found"})
    }
    
  } catch (error) {
    res.send(error.message)
  }

})

module.exports = router