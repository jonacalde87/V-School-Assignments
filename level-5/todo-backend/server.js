const express = require("express") // import express
const app = express() // declare server variable

//middleware; this will run everytime
app.use(express.json())

//routes
app.use("/todos", require("./routes/todoRouter"))

//Server listen
app.listen(9000, () => {
    console.log("the server is running in PORT 9000")
})