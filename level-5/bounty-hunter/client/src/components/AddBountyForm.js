import React, { useState } from 'react'
import {Box, Checkbox} from '@mui/material'

export default function AddBountyForm(props) {
    const initInputs = {
        firstName: props.firstName || "",  // put req modification
        lastName: props.lastName || "",
        living: props.living || false,
        bountyAmount: props.bountyAmount || "",
        type: props.type || ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    const handleStatus = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            living: e.target.checked
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        // console.log(inputs)
        //post request
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    function handleType(e) {
        setInputs((prevState) => ({
            ...prevState,
            type: e.target.value
        }))
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="First Name"
                />
            <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                /> 
            <Box>
                <h4>Status: Alive?</h4>
                <Checkbox  
                // style={{alignItem:"center"}}                          
                checked={inputs.living}
                onChange={handleStatus}
                />
            </Box>

            <input
                type="number"
                name="bountyAmount"
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder="Bounty Amount"
                />
            
            {/* change this */}
            {/* <input
                type="text"
                name="type"
                value={inputs.type}
                onChange={handleChange}
                placeholder="Sith or Jedi"
                /> */}

            <select
                onChange={handleType}
            >
                <option className='allegiance-btn'>- Select Allegiance -</option>
                <option value="Sith">Sith</option>
                <option value="Jedi">Jedi</option>
            </select>

            <button>{props.btnText}</button>
        </form>            
    )
}
