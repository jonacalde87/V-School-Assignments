import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import careData from './careData'


export default function PlantCare(props) {

  const { careId } = useParams()
  //this will be replaced with get API request
  const thisCare = careData.find(care => care._id === careId)

  //useHistory
  const navigate = useNavigate()
  function handleClick() {
    return navigate(-1) 
  }

  return (
    <div style={{ textAlign: "center" }}>
    <br></br>
      <h1>How to care for {thisCare.name}</h1>
    <hr />
      <h2> Sun: {thisCare.sun} <br></br> <br></br>
        Water: {thisCare.water} <br></br> <br></br>
        Temperature: {thisCare.temperature} <br></br> <br></br>
        <img src={thisCare.img} alt="" className="pics"/>
      </h2>

      {/* go back link: use this when is easy */}
      {/* <Link to="/care">Go back</Link> */}
      {/* this is to practice useHistory button, use this when is more complicated */}
      <button onClick={handleClick}>Go back to all plants</button>

    </div>
  )
}