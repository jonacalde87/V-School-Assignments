import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.js'

//axios.get("/movies") - to get movies from my API
// axios.get("http://rickandmortyapi.com") - to get from 3rd party API

document.getElementById('root')
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
)
