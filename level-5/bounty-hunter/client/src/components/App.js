import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './Bounty'
import AddBountyForm from './AddBountyForm.js'


export default function App() {
    const [bounties, setBounties] = useState([])

    //this function is to make it re-usable
    function getBounties() {
        axios.get("/bounties")
            // .then(res => console.log(res)) // to test is working, do it first then check console
            .then(res => setBounties(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }
    //Post request
    function addBounty(newBounty) {
        axios.post("/bounties", newBounty)
            // .then(res => console.log(res)) //to test post request is working
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data])
            })
            .catch(err => console.log(err))
    }

    //function for delete button: need to render it in this file so the button will work on Bounty.js file
    function deleteBounty(bountyId) {
        axios.delete(`/bounties/${bountyId}`)
            // .then(res => console.log(res)) // to test delete button
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => (err))
    }

    //put request (EDIT)
    function editBounty(updates, bountyId) {
        axios.put(`/bounties/${bountyId}`, updates)
            // .then(res => console.log(res)) // to test put req
            .then(res => {
                setBounties((prevBounties) => [
                    ...prevBounties.map((bounty) => (bounty._id !== bountyId ? res.data : bounty))
                ])
            })
            .catch(err => (err))
    }

    function handleFilter(e) {
        if (e.target.value === "reset") {
            getBounties()
        } else {
            axios.get(`/bounties/search/type?type=${e.target.value}`)
                // .then(res => console.log(res))
                .then(res => setBounties(res.data))
                .catch(err => console.log(err))
        }
    }

    //Couldnt make work another filter option (status)
    // function handleStatus(e) {
    //     if (e.target.value === "reset") {
    //         getBounties()
    //     } else {
    //         axios.get(`/bounties/search/living?living=${e.target.value}`)
    //             // .then(res => console.log(res))
    //             .then(res => setBounties(res.data))
    //             .catch(err => console.log(err))
    //     }
    // }


    useEffect(() => {
        getBounties()
    }, []) // will fire only once because side effect is empty

    //for each bounty return the bounty component that has all the information from the bounty
    return (
        <div>
            <h1 className='header'>Bounty Hunter Tracker</h1>
            <div className='bounty-container'>
                <AddBountyForm
                    submit={addBounty}
                    btnText="Add Bounty" />

                <div className='filter-box'>
                    <h4>Filter by Allegiance:</h4>
                    <select
                        onChange={handleFilter}
                        style={{ width: "120px" }}
                    >
                        <option value="reset">All Allegiances</option>
                        <option value="Jedi">Jedi</option>
                        <option value="Sith">Sith</option>
                    </select>

                    {/* Need work */}
                    {/* <h4>Filter by Status:</h4>
                    <select
                        onChange={handleStatus}
                        style={{ width: "120px" }}
                    >
                        <option value="reset">All Status</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                    </select> */}

                </div>
                    {bounties.map(bounty =>
                        <Bounty
                            {...bounty}
                            key={bounty._id}
                            deleteBounty={deleteBounty}
                            editBounty={editBounty} />
                    )
                    }
                </div>
            </div>
        
    )
}