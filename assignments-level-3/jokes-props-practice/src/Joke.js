import React from "react"

export default function Joke(props) {
    //create state
    const [isShown, setIsShown] = React.useState(false)

    // create function
    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }



    return (
        <div>
            {/*  use {} on all to use js expression  */}

            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            
            {/* using a ternary operator for conditionals */}
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
           
            <hr />
        </div>
    )
}