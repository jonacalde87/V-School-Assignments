import React from 'react'
import Images from "../images/trollFace.png"

export default function Header() {
  return (
    <div className='header'>
        <img src={Images} className='troll--face' alt='' />
        <h2 className='header--title'>Meme Generator</h2>
        <h3 className='header--title2'>React Course - Project 3</h3>
    </div>
  )
}
