import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from './Movie'
import AddMovieForm from './AddMovieForm.js'

export default function App() {
    const [movies, setMovies] = useState([])

    //this function is to make it re-usable
    function getMovies() {
        axios.get("/movies")
            // .then(res => console.log(res)) // to test get is working, do it first and check browser console
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
    }

    //Post request
    function addMovie(newMovie) {
        axios.post("/movies", newMovie)
        // .then(res => console.log(res)) //to test post request is working
        .then(res => {
            setMovies(prevMovies => [...prevMovies, res.data])
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getMovies()
    }, [])// will fire only once because side effect is empty

    //for each movie return movie component that has all the items from the movie
    return (
        <div>
            <div className='movie-container'>
                <AddMovieForm 
                    addMovie={addMovie}
                />
                {movies.map(movie => <Movie {...movie} key={movie.title} />)}
            </div>
        </div>
    )
}
