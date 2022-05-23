import React from 'react'
import '../styles.css'

export default function Movie(props) {
    // console.log(props) // Movie component should be receiving all the data via props, but check it
    //deconstruct props to not repeat it so much
    const { title, genre, _id } = props
  return (
    <div className='movie'>
        <h1>Title: { title }</h1>
        <p>Genre: { genre }</p>
    </div>
  )
}
