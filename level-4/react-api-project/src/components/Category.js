import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import careData from "../pages/careData"
import {ThemeContext} from '../themeContext'


function Care() {
    const {color} = useContext(ThemeContext) 

    const care = careData.map(plantCare => (
        <h2 key={plantCare._id} style={{ textAlign: "center", padding:"10px" }}>
            <Link to={`/category/${plantCare._id}`}>{plantCare.name}</Link>
        </h2>
    ))

    //useHistory
  const navigate = useNavigate()
  function handleClick() {
    return navigate(-1) 
  }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Shop by Category:</h1>
            {care }
            <button 
                onClick={handleClick}
                style={{marginBottom:"31%"}}
                className={`${color}-theme`}
            >
                Go back to Main Page
            </button>
        </div>
        
    )
}

export default Care