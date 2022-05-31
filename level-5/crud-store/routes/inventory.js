const express = require("express")
const inventory = require("../models/inventory")
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')

//routes
inventoryRouter.route("/")
    //get all : localhost:9000/inventory
    .get((req, res, next) => {
        Inventory.find((err, inventory) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(inventory)
        })
    })

    //Post one
    .post((req, res, next) => {
        const newInventory = new Inventory(req.body)
        newInventory.save((err, savedInventory) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedInventory)
        })
    })

//GET one
inventoryRouter.route("/:inventoryId")
    .get((req, res, next) => {
        const inventoryId = req.params.inventoryId
        Inventory.findById(inventoryId, (err, inventory) => {
            if (!inventoryId) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(inventory)
        })
    })

//GET by type (using query string) to filter results
inventoryRouter.route("/search/type") //localhost:9000/inventory/search/type?type=food
    .get((req, res, next) => {
        Inventory.find({ type: req.query.type }, (err, inventory) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(inventory)
        })
    })

// DELETE one
inventoryRouter.delete("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndDelete({ _id: req.params.inventoryId }, (err, deletedInventory) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted "${deletedInventory.item}" from the database`)
    })
})

//PUT (Update one)
inventoryRouter.put("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndUpdate(
        { _id: req.params.inventoryId }, //find this one to update
        req.body, //update the object with this data
        { new: true }, //send back the updated version please
        (err, updatedInventory) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedInventory)
        }
    )
})

module.exports = inventoryRouter