import React, { useState } from 'react'

//1. create context
const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const[color, setColor] = useState("dark")

    const toggleTheme = function() {
    setColor(prevColor => prevColor === "dark" ? "light" : "dark")
  }

    return(
        <ThemeContext.Provider value={{
            color: color,
            toggleTheme: toggleTheme
        }}>
            {props.children} 
        </ThemeContext.Provider>  
    )
}

export {ThemeContext, ThemeContextProvider}