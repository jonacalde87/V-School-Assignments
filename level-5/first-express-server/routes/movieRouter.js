const express = require('express')
const movieRouter = express.Router()
// const { v4: uuidv4 } = require('uuid') //use when not connected to db
const Movie = require('../models/movie') // use this variable to CRUD movies

// // //when not using db
// const movies = [
//     { title: "die hard", genre: "action", _id: uuidv4() },
//     { title: "star wars IV", genre: "fantasy", _id: uuidv4() },
//     { title: "lion king", genre: "fantasy", _id: uuidv4() },
//     { title: "friday the 13th", genre: "horror", _id: uuidv4() }
// ]

//Get All
movieRouter.get("/", (req, res, next) => {
    Movie.find((err, movies) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

//Post one
movieRouter.post("/", (req, res, next) => {
    //use when not connected to db
    // const newMovie = req.body
    // newMovie._id = uuidv4() // new movie will have an id
    // movies.push(newMovie) // to add the new movie to the movies array
    // // res.send(`Succesfully added ${newMovie.title} to the database!`) // will display this message in postman
    // res.status(201).send(newMovie)
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMovie)
    })
})

// //Get One
// movieRouter.get("/:movieId", (req, res, next) => { //add next for err handling
//     //console.log(req) // test in postman
//     const movieId = req.params.movieId
//     const foundMovie = movies.find(movie => movie._id === movieId)
//     //Error ; add next function ------
//     if(!foundMovie) {
//         const error = new Error(`The item with the id ${movieId} was not found`)
//         res.status(500)
//         return next(error)
//     }
//     // -----
//     res.status(200).send(foundMovie)
// })

//Get by genre (using query strings) to filter : localhost:9000/movies/search/genre?genre=fantasy
movieRouter.get("/search/genre", (req, res, next) => {
    // const genre = req.query.genre
    // //err handling
    // if(!genre) {
    //     const error = new Error("You must provide a genre")
    //     res.status(500)
    //     return next(error)
    // }
    // const filteredMovies = movies.filter(movie => movie.genre === genre)
    // res.status(200).send(filteredMovies)
    Movie.find({ genre: req.query.genre}, (err, movies) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})


//Delete one
movieRouter.delete("/:movieId", (req, res, next) => {
    // when not connected to db
    // const movieId = req.params.movieId
    // const movieIndex = movies.findIndex(movie => movie._id === movieId)
    // movies.splice(movieIndex, 1)
    // res.send("Successfully deleted movie!")
    Movie.findOneAndDelete(
        { _id: req.params.movieId },
        (err, deletedItem) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted "${deletedItem.title}" from the database`)
        })
})

//Update One
movieRouter.put("/:movieId", (req, res, next) => {
    // const movieId = req.params.movieId
    // const movieIndex = movies.findIndex(movie => movie._id === movieId)
    // const updatedMovie = Object.assign(movies[movieIndex], req.body)
    // res.status(201).status(201).send(updatedMovie)
    Movie.findOneAndUpdate(
        { _id: req.params.movieId }, // find this one to update
        req.body, //update the object with this data
        { new: true }, //send back the updated version please
        (err, updatedMovie) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMovie)
        }
    )
})

module.exports = movieRouter