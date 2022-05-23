const express = require("express")
const itemRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuidv4()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuidv4()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuidv4()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuidv4()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuidv4()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuidv4()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuidv4()
    }
]

itemRouter.route("/")
    //Get all
    .get((req, res) => {
        res.send(inventoryItems)
    })
     //Post one
     .post((req, res) => {
        const newItem = req.body
        newItem._id = uuidv4()
        inventoryItems.push(newItem)
        res.send(`Succesfully added ${newItem.type} to the database!`)
    })

//Get One (using params)
itemRouter.route("/:itemId")
    .get((req, res) => {
        const itemId = req.params.itemId
        const foundItem = inventoryItems.find(item => item._id === itemId)
        res.send(foundItem)
    })
//Get by type (query string) to filter results
itemRouter.route("/search/type") // items/search/type?type=banana
.get((req, res) => {
    const type = req.query.type
    const filteredItems = inventoryItems.filter(fruit => fruit.type === type)
    res.send(filteredItems)
})   

    
module.exports = itemRouter