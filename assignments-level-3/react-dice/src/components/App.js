import React, { useState } from 'react'
import Dicebox from './Dicebox'
import '../css/index.css'

export default function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6])
    
    return(
        <div>
            <button onClick={() => 
                setNumbers([...Array(5)].map(() => 
                Math.floor(Math.random() * 6 + 1)))}
            >
                Roll Dice
            </button>
            <Dicebox 
                dice={numbers}
            />
        </div>
    )
}
