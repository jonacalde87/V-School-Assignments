import React from 'react'
import Logo from '../images/github.png'
import LinkedIn from '../images/linkedIn.png'

export default function Footer() {
  return (
    <div className='footer--right'>
      {/* target so it opens link in a new tab */}
      <a href='https://github.com/jonacalde87/V-School-Assignments' target="_blank" rel="noopener noreferrer">
        <img className='footer--logo' src={Logo} alt={Logo} style={{marginRight:"20px"}}/>
      </a>
      <a href='https://www.linkedin.com/in/jonathancalderon3/' target="_blank" rel="noopener noreferrer">
        <img className='footer--logo' src={LinkedIn} alt={LinkedIn}/>
      </a>

    </div>
  )
}