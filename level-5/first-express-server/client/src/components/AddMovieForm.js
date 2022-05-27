import React, { useState } from 'react'

export default function AddMovieForm(props) {
    const initInputs = { title: props.title || "", genre: props.genre || "" } // put req modification
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        // console.log(inputs)
        //post request
        props.submit(inputs, props._id) // changed to be more accurate; put req modification
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name='title'
                value={inputs.title}
                onChange={handleChange}
                placeholder="Title"
            />
            <input
                type="text"
                name='genre'
                value={inputs.genre}
                onChange={handleChange}
                placeholder="Genre"
            />
            {/* put req modification */}
            <button>{props.btnText}</button>
        </form>
    )
}

/*for put request:
1.use this form but modified for the edit button; modify the inputs
2.
3.
*/
