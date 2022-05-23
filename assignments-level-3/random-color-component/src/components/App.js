import React, { useState, useEffect } from 'react';

export default function App() {
    const [color, setColor] = useState(`red`)
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(res => setColor(`#${res.data.new_color}`))
            .catch(err => console.error(err))
    }, [count])

    return (
        <div style={{backgroundColor: color}} className="box">
            <h1>Box Color</h1>
            <button onClick={() => setCount(prev => prev +1)}>Change Color</button>
        </div>
    )
}





