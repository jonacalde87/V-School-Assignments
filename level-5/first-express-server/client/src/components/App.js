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
            .catch(err => console.log(err.response.data.errMsg)) // error handling
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

    //function for delete button: need to render it in this file so the button will work on Movie.js
    function deleteMovie(movieId) {
        axios.delete(`/movies/${movieId}`)
        // .then(res => console.log(res)) //test delete button
        .then(res => {
            setMovies(prevMovies => prevMovies.filter(movie =>movie._id !== movieId))
        })
        .catch(err => console.log(err))
    }

    //edit function; put req
    function editMovie(updates, movieId) {
        axios.put(`/movies/${movieId}`, updates)
        // .then(res => console.log(res)) to test put req
        .then(res => {
            setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
        })
        .catch(err =>console.log(err))
    }

    useEffect(() => {
        getMovies()
    }, [])// will fire only once because side effect is empty

    //for each movie return movie component that has all the items from the movie
    return (
        <div>
            <div className='movie-container'>
                <AddMovieForm 
                // will recieve the prop submit; put req modification
                    submit={addMovie}
                    btnText="Add Movie"
                />
                {
                    movies.map(movie => 
                        <Movie 
                            {...movie} 
                            key={movie.title} 
                            deleteMovie={deleteMovie}
                            editMovie={editMovie} />)
                }
            </div>
        </div>
    )
}
