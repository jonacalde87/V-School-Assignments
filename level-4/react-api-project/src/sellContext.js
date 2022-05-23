import React, { useState, useEffect } from 'react'
import axios from 'axios'

//1. create context
const SellContext = React.createContext()
//console.log(SellContext)

function SellContextProvider(props) {
  //state
  const [sellItems, setSellItems] = useState({
    title: "",
    imgUrl: "",
    price: ""
  })

  //state to hold sell listings
  const [sellListing, setSellListing] = useState([])
  // console.log(sellListing)

  //function to change state
  function handleChange(e) {
    const { name, value } = e.target
    setSellItems(prevSell => {
      return {
        ...prevSell,
        [name]: value
      }
    })
  }

  //Get request
  useEffect(() => {
    axios.get("https://api.vschool.io/jonacalde/todo/")
      .then(res => setSellListing(res.data)) //contains all the items from API
      // .then(res => console.log(res.data)) to test the API data
      .catch(err => console.log(err))
  }, [sellItems]) //because I want to re-render page when sellItems state changes(when user inputs listing item)


  //Post request 
  const addListing = (e) => {
    e.preventDefault() // this is required for a submit button --WONT WORK WITH OUT IT--
    // console.log(sellItems)
    axios
      .post("https://api.vschool.io/jonacalde/todo", sellItems)
      .then(res => {   
        console.log(res)     
        setSellListing(prevList => [...prevList, res.data]) // this is to add new object to the listing
        setSellItems({
          title: "",
          imgUrl: "",
          price: ""          
        })
      })
      .catch(err => console.log(err))    
  }

  return (
    <SellContext.Provider value={{
      sellListing: sellListing,
      setSellListing,
      sellItems,
      handleChange,
      addListing
    }}>
      {props.children}
    </SellContext.Provider>
  )
}

export { SellContext, SellContextProvider } // not default because theres more than one