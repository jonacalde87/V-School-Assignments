const express = require("express")
const app = express()

app.use(express.json())

app.use("/items", require("./routes/itemRouter"))
app.listen(9000, () => {
    console.log("The server is running in PORT 9000")
})