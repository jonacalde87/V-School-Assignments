const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

//fake data
const bounties = [
    {
        firstName: "Jonathan",
        lastName: "Calderon",
        living: true,
        bountyAmount: 40,
        type: "Sith",
        _id: uuidv4()
    },
    {
        firstName: "Alosha",
        lastName: "Calderon",
        living: false,
        bountyAmount: 87,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        firstName: "Adriana",
        lastName: "Calderon Lopez",
        living: true,
        bountyAmount: 120,
        type: "Sith",
        _id: uuidv4()
    }
]

//Routes
bountyRouter.route("/")
    //Get All
    .get((req, res) => {
        res.send(bounties)
    })
     //Post One
     .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty.type} to the database!`)
    })
   
    //Get One (using params)
    bountyRouter.route("/:bountyId") // this is the parameter <:>
    .get((req, res) => {
        const bountyId = req.params.bountyId
        const foundBounty = bounties.find(bounty => bounty._id === bountyId)
        res.send(foundBounty)
    })
    //Get by type (using query string) to filter results
    bountyRouter.route("/search/type") // bounties/search/type?type=Jedi
    .get((req, res) => {
        const type = req.query.type
        const filteredBounties = bounties.filter(bounty => bounty.type === type)
        res.send(filteredBounties)
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
        res.send(updatedBounty)
    })
   

module.exports = bountyRouter
