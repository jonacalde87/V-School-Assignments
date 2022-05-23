const express = require('express')
const app = express()
const {v4: uuidv4} = require('uuid')

//middleware... this happens 1st
app.use(express.json())

        //middleware function... this happens 2nd
        app.use("/items", (req, resp, next) => {
            console.log("1. THE ITEMS MIDDLEWARE WAS EXECUTED")
                next()
        }) //then go to post man; localhost:9000/items

        //another next () to add an object to the request
        app.use("/items", (req, res, next) =>{
            console.log("2. PASSING OBJECT AS MIDDLEWARE")
            req.body = { 
                name: "Rick",
                age: 30,
            }
            next()
        })

        //this happens last and ends with the res.send()
        app.get("/items", (req, res, next) => {
            console.log("3. GET REQUEST RECEIVED")
            res.send(req.body)
        })



app.listen(9000, () => {
    console.log("Server running on port 9000")
})