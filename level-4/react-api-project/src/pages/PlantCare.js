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
      <h1>{thisCare.name}</h1>
      <hr />
      <br></br>
      <h2>{thisCare.item} <br></br> <br></br>
        ${thisCare.price} <br></br> <br></br>
         <br></br> <br></br>
        <img src={thisCare.img} alt="" className="pics" />
        <br></br> <br></br>
      </h2>
      {/* <Link to="/care">Go back</Link> */}
      {/* this is to practice useHistory button, use this when is more complicated */}
      <button
        onClick={handleClick}
        style={{marginBottom:"18%"}}
      >
        Go back to all categories
      </button>

    </div>
  )
}