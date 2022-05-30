const express = require("express") //import express
const app = express() // declare server variable
const morgan = require('morgan')
const mongoose = require('mongoose')

//middleware for every request
app.use(express.json())
app.use(morgan('dev')) //Logs requests to the console

// connect to DB
mongoose.connect('mongodb://localhost:27017/bountyHunterDB', // default port number for mongodb local/name of database
    () => console.log('Connected to database')) // then nodemon server.js and should see message (it takes a min)
    //DONT FORGET TO CREATE MODELS FOLDER IN BACKEND!

//Routes
app.use("/bounties", require("./routes/bountyRouter"))

//error handler; custom Error handling middleware: goes before the app.listen at bottom of code
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})
//Server listen
app.listen(9000, () => {
    console.log("The server is running in PORT 9000")
})



