const express = require('express')
const movieRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const movies = [
    {title: "die hard", genre: "action", _id: uuidv4()},
    {title: "star wars IV", genre: "fantasy", _id: uuidv4()},
    {title: "lion king", genre: "fantasy", _id: uuidv4()},
    {title: "friday the 13th", genre: "horror", _id: uuidv4()} 
]

//Get All
movieRouter.get("/", (req, res) => {
    res.send(movies)
})

//Get One
movieRouter.get("/:movieId", (req, res) => {
    //console.log(req) // test in postman
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})

//Get by genre (using query strings) to filter 
movieRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})

//Post one
movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuidv4() // new movie will have an id
    movies.push(newMovie) // to add the new movie to the movies array
    // res.send(`Succesfully added ${newMovie.title} to the database!`) // will display this message in postman
    res.send(newMovie)
})

//Delete one
movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send("Successfully deleted movie!")
})

//Update One
movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    res.send(updatedMovie)
})






module.exports = movieRouter