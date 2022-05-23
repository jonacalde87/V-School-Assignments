import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"

export default function App() {
    const jokeElements = jokesData.map(function(joke) {
        return (
            <Joke 
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
        )
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}
