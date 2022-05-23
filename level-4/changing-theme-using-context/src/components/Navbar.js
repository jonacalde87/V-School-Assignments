import React, { useContext } from 'react'
import {ThemeContext} from '../themeContext'

export default function Navbar(props) {
    //3. consumer
    const {color} = useContext(ThemeContext)

  return (
    <div className={`${color}-theme`}>
        <div className='nav-items'>
            <button className={`${color}-home`}>Home</button>
            <button className={`${color}-about`}>About</button>
            <button className={`${color}-contact`}>Contact</button>
        </div>
        
    </div>
  )
}
