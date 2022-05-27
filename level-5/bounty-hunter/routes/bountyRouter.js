const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

//fake data
const bounties = [
    {
        firstName: "Jonathan",
        lastName: "Calderon",
        living: "dead",
        bountyAmount: 40,
        type: "Sith",
        _id: uuidv4()
    },
    {
        firstName: "Alosha",
        lastName: "Calderon",
        living: "alive",
        bountyAmount: 87,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        firstName: "Adriana",
        lastName: "Calderon Lopez",
        living: "alive",
        bountyAmount: 120,
        type: "Sith",
        _id: uuidv4()
    }
]

//Routes
bountyRouter.route("/")
    //Get All
    .get((req, res) => {
        res.status(200)
        res.send(bounties)
    })
    //Get One (using params)
    bountyRouter.route("/:bountyId") // this is the parameter <:>
        .get((req, res, next) => {
            const bountyId = req.params.bountyId
            const foundBounty = bounties.find(bounty => bounty._id === bountyId)
            //Error handling ------
            if(!foundBounty) {
                const error = new Error(`The item with the id ${bountyId} was not found`)
                res.status(500)
                return next(error)
            }
            // -----
            res.status(200).send(foundBounty)
        })
    //Post One
    .post((req, res, next) => {
        const newBounty = req.body
        // //err handling ???
        // if(!newBounty) {
        //     const error = new Error("You must provide a type")
        // return next(error)
        // }
        // //-----
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.status(201).send(newBounty)
        // res.send(`Successfully added ${newBounty.type} to the database!`) //display a message to test on postman
    })

//Get by type (using query string) to filter results
bountyRouter.route("/search/type") // bounties/search/type?type=Jedi
    .get((req, res, next) => {
        const type = req.query.type
        //err handling------
        if(!type) {
        const error = new Error("You must provide a type")
        res.status(500)
        return next(error)
        }
        //-----
        const filteredBounties = bounties.filter(bounty => bounty.type === type)
        res.status(200).send(filteredBounties)
    })
//Delete one
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted bounty!")
})
//Update One
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.status(201).send(updatedBounty)
})

module.exports = bountyRouter
