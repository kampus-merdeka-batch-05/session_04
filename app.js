const express = require("express")
const app = express()
const PORT = 3000

const routes = require("./routes")

/**
 * 1. req.body => POST atau PUT
 * 2. req.params => GET,PUT, DELETE, PATCH
 * 3. req.query => GET, PUT, PATCH
 * 
 * 1. get all shoes
 * 2. get all shirts
 */

app.use("/", routes)

app.listen(PORT, () => {
  console.log("Server running on PORT: ", PORT);
})