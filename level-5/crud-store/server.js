//build express server
const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

//middleware for every request
app.use(express.json())
app.use(morgan('dev'))

//connect to db
mongoose.connect("mongodb://localhost:27017/eStoredb",
    () => console.log("Connected to the database"))

//routes
app.use("/inventory", require("./routes/inventory"))

//error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//server listen
app.listen(9000, () => { console.log("The server is running in PORT 9000") })