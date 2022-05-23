const express = require('express')
const tvshowRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const tvShows = [
    {title:"Rick and Morty", _id: uuidv4()},
    {title:"Watchmen", _id: uuidv4()},
    {title:"Arthur", _id: uuidv4()},
    {title:"The Flinstone", _id: uuidv4()}
]

//1. Endpoint (mount path), 2. callback function
//GET ALL
tvshowRouter.get("/", (req, res) => {
    res.send(tvShows)
})
//Get One
tvshowRouter.get("/:tvshowId", (req, res) => {
    const tvShowId = req.params.tvshowId
    const foundShow = tvShows.find(show => show._id === tvShowId)
    res.send(foundShow)
})


//POSt One
tvshowRouter.post("/", (req, res) => {
    const newShow = req.body
    newShow._id = uuidv4()
    tvShows.push(newShow)
    res.send(`Succesfully added ${newShow.title} to the database!`)
})

// tvshowRouter.route("/")
//         .get((req, res) => {
//     res.send(tvShows)
// })
// .post((req, res) => {
//     const newShow = req.body
//     newShow._id = uuidv4()
//     tvShows.push(newShow)
//     res.send(`Succesfully added ${newShow.title} to the database!`)
// })


module.exports = tvshowRouter