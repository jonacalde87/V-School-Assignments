import React, { useState } from 'react'

export default function App() {
    const [names, setNames] = useState('')
    const [listNames, setListNames] = useState([])

    const handleChange = (e) => {
        const {value} = e.target
        setNames(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setListNames(prevList => [...prevList, names])
    }

    const nameEntries = listNames.map(name => (<li>{name}</li>))

    return(
        <form onSubmit={handleSubmit}>
            <input 
                name="firstName"
                type="text"
                placeholder="Name here"
                value={names}
                onChange={handleChange}
            />

            <h1>{names}</h1>
            <br />
            <button>Submit Entry</button>
            <ul>
                {nameEntries}
            </ul>
        </form>
        
    )
}

