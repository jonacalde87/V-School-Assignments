import React from 'react'

export default function DataEntry(props) { 
// console.log(props)
    return (
       
        <form className="form" onSubmit={props.handleSubmit}>
         <div className='data-entry'>            
            <input
                className='firstName--input'
                placeholder='First Name'
                name='firstName'
                onChange={props.handleChange}
                value={props.badgeData.name}
            />
            <input
                className='lastName--input'
                placeholder='Last Name'
                name='lastName'
                onChange={props.handleChange}
                value={props.badgeData.lastName}
            />
            <input
                className='email--input'
                placeholder='Email'
                name='email'
                onChange={props.handleChange}
                value={props.badgeData.email}
            />
            <input
                className='placeOfBirth--input'
                placeholder='Place of Birth'
                name='placeOfBirth'
                onChange={props.handleChange}
                value={props.badgeData.placeOfBirth}
            />
            <input
                className='phone--input'
                placeholder='Phone'
                name='phone'
                onChange={props.handleChange}
                value={props.badgeData.phone}
            />
            <input
                className='favoriteFood--input'
                placeholder='Favorite Food'
                name='favoriteFood'
                onChange={props.handleChange}
                value={props.badgeData.favoriteFood}
            />
            <textarea
                className='textArea--input'
                placeholder='Tell us about yourself'
                name='aboutYourself'
                onChange={props.handleChange}
                value={props.badgeData.aboutYourself}
            />
            <button
                className='submit--btn'
            >
                Submit
            </button> 
         </div>
        </form>
       
    )
}
