const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')


//another next () to add an object to the request
app.use("/items", (req, res, next) =>{
    console.log("2. PASSING OBJECT AS MIDDLEWARE")
    req.body = { 
        name: "Rick",
        age: 30,
    }
    next()
})

ageRouter.route("/")
//this happens last and ends with the res.send()
get("/items", (req, res, next) => {
    console.log("3. GET REQUEST RECEIVED")
    res.send(req.body)
})

module.exports = ageRouter