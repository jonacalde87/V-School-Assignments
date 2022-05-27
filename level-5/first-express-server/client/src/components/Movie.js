import React, { useState } from 'react'
import '../styles.css'
import AddMovieForm from './AddMovieForm' //put req modification

export default function Movie(props) {
  // console.log(props) // Movie component should be receiving all the data via props, but check it
  //deconstruct props to not repeat it so much
  const { title, genre, _id } = props

  //put req modification
  const [editToggle, setEditToggle] = useState(false)

  //mapping all movies nd each movie is receiving title, genre and id.
  // each movie is also receiving its reference for delete movie funtion
  return (
    <div className='movie'>
      { !editToggle ?
        <>
          <h1>Title: {title}</h1>
          <p>Genre: {genre}</p>
          <button
            className='delete-btn'
            onClick={() => props.deleteMovie(_id)}>
            Delete
          </button>
          <button 
            className='edit-btn'
            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Edit
          </button>
        </>
        :
        <>
          {/* put req modification */}
          <AddMovieForm
            title={title}
            genre={genre}
            _id={_id}
            btnText="Submit Edit"
            submit={props.editMovie}
            />
          <button
            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Close
          </button>
        </>
      }
    </div>
  )
}
