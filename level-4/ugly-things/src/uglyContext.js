import React, { useState, useEffect } from "react";
import axios from 'axios' //to use axios npm install axios

//1. create context
const UglyContext = React.createContext()
// console.log(UglyContext)

function UglyContextProvider(props) {
    //state
    const [uglyThings, setUglyThings] = useState({
        imgUrl: "",
        title: "",
        description: ""
    })

    //state to hold list
    const [uglyList, setUglyList] = useState([])

    //function to change state
    function handleChange(e) {
        const { name, value } = e.target
        setUglyThings(prevUgly => {
            return {
                ...prevUgly,
                [name]: value
            }
        })
    }

    //Get request
    useEffect(() => {
        axios.get('https://api.vschool.io/jonacalde/thing')
            .then(res => setUglyList(res.data)) //contains all the items from API
            .catch(err => console.log(err))
    }, [uglyThings]) // because I want to re-render page when uglyThings state changes

    // Post request ?? 
    const addUglyThing = (e) => {
        e.preventDefault()
        axios.post('https://api.vschool.io/jonacalde/thing', uglyThings)
            .then(res => {
                setUglyThings({
                    imgUrl: "",
                    title: "",
                    description: ""
                }) // this will reset form fields
                setUglyList(prevList => [...prevList, res.data]) // this will add the new object to the list of ugly things
            })
            .catch(err => console.log(err))
    }


    return (
        <UglyContext.Provider value={{
            uglyList: uglyList,
            setUglyList: setUglyList,
            uglyThings: uglyThings,
            handleChange: handleChange,
            addUglyThing: addUglyThing,
        }}>
            {props.children}
        </UglyContext.Provider>
    )
}

export { UglyContext, UglyContextProvider } // not default because theres more than one