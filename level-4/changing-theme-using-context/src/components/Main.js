import React, { useContext } from 'react'
import { ThemeContext } from '../themeContext'

export default function Main() {
    //3. consumer
    const { color, toggleTheme } = useContext(ThemeContext)

    return (
        
            <div className={`${color}-theme`}>
                <h1>Click the button to toggle the {color} theme!</h1>
                <button
                    className={`${color}-theme`}
                    onClick={toggleTheme}
                >
                    {color} theme
                </button>
            </div>
       
    )
}
