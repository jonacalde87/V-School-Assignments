const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Inventory Schema(blueprint)
const inventorySchema = new Schema({
    item: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum:["food", "cleaning", "clothes"]
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)
