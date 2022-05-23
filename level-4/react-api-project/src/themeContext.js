import React, { useState } from "react"

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const [color, setColor] = useState("light")

    const toggleTheme = () => {
        setColor(prevColor => prevColor === "dark" ? "light" : "dark")
    }

    return (
        <ThemeContext.Provider value={{
            color: color,
            toggleTheme: toggleTheme
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider } // not default because its more than 1 thing imported