import React from "react"

export default function Card(props) {


    return (
        <div className="card">  
            <img src={`../images/${props.item.coverImg}`} className="card--image" />
            <div className="card--text">
                <p className="location">{props.item.location}</p> 
                <a className="map" href={props.item.googleMapsUrl}>View on Google Maps</a>                
                <p className="bold">{props.item.title}</p>
                <p className="bold">{props.item.startDate} - {props.item.endDate}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}