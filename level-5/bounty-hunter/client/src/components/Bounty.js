import React, { useState } from 'react'
import '../css/styles.css'
import AddBountyForm from './AddBountyForm' // for the put req

export default function Bounty(props) {
  // console.log(props) // Bounty component should be receiving all the data via props, but check it
  //deconstruct props to not repeat it so much
  const {
    firstName,
    lastName,
    living,
    bountyAmount,
    type,
    _id
  } = props

  //for put req
  const [editToggle, setEditToggle] = useState(false)

  //mapping all bounties and each bounty is receiving firstName, lastName, living, bountyAmount, type, and id
  //each bounty is also receiving its reference for delete bounty funtion
  return (
    <div className='bounty'>
      {!editToggle ?
        <>
          <h1>Wanted: {firstName} {lastName} - *{type}*</h1>
          <h2>Reward: ${bountyAmount} </h2>
          <p>Wanted {living} </p>
          <button
            className='delete-btn'
            onClick={() => props.deleteBounty(_id)}>
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
          {/* put req */}
          <AddBountyForm
            firstName={firstName}
            lastName={lastName}
            living={living}
            bountyAmount={bountyAmount}
            type={type}
            _id={_id}
            btnText="Submit Edit"
            submit={props.editBounty}
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





