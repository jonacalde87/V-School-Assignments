import React from "react"
import { Link } from "react-router-dom"
import careData from "../pages/care/careData"


function Care() {
    const care = careData.map(plantCare => (
        <h2 key={plantCare._id} style={{ textAlign: "center" }}>
            <Link to={`/care/${plantCare._id}`}>{plantCare.name}</Link>
        </h2>
    ))

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>How to care for carnivorous plants</h1>
            {care}
            <Link to="/">Go back to Main Page</Link>
        </div>
    )
}

export default Care