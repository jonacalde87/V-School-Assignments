import React from 'react'

export default function Badge(props) {
  console.log(props)
  return (
 
    <div className='badge--container' key={props.firstName}>
     
  
        <h3 className='badge--header'>Badge:</h3>
        <div className='label--container'>            
            <label>
              Name: {props.firstName}
            </label>
            <label>
              Phone: {props.phone}
            </label>
            <label>
              Place of Birth: {props.placeOfBirth}
            </label>
            <label>
              Favorite Food: {props.favoriteFood}
            </label>
            <label>
              Email: {props.email}
            </label>
        </div>
        <div className='textArea--output'
        >
            {props.aboutYourself}
        </div>
    </div>
  )
}
