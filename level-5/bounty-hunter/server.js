const express = require("express") //import express
const app = express() // declare server variable
const morgan = require('morgan')

//middleware for every request
app.use(express.json())
app.use(morgan('dev')) //Logs requests to the console

//Routes
app.use("/bounties", require("./routes/bountyRouter"))

//Server listen
app.listen(9000, () => {
    console.log("The server is running in PORT 9000")
})



