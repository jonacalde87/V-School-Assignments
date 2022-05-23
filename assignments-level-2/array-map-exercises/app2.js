// return movie action

const movies = [
    { name: "movie1", genre: "horror" },
    { name: "movie2", genre: "action" },
    { name: "movie3", genre: "action" },
    { name: "movie4", genre: "fantasy" }
]

const actionMovies = movies.filter(function(movie) {
    if(movie.genre === "action") {
        return movie
    }    
})
console.log(actionMovies)

//OUTPUT:
// [
//     { name: 'movie2', genre: 'action' },
//     { name: 'movie3', genre: 'action' }
// ]


