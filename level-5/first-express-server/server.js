// Build express server ("app server") // 
const express = require("express") //import express
const app = express() //declare server variable
const morgan = require("morgan")

//Middleware (for every request) (app.use makes it a middleware)
app.use(express.json()) //Looks for a request body, and turns it into 'req.body'
app.use(morgan('dev')) //Logs requests to the console

// Routes //
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvshowRouter.js"))

// custom Error handling middleware: foes before the app.listen at bottom of code
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server listen //
//has 2 arguments: 1. PORT 2. callback function
app.listen(9000, () => {   //so server listens for requests
    console.log("The server is running in PORT 9000")
}) 



// CTRL + C to stop server and be able to use terminal
//run server:
    // nodemon server.js
