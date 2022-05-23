import React, { useContext } from 'react'
import {ThemeContext} from '../themeContext'
import { SellContext } from '../sellContext'

export default function Form() {
    const {color} = useContext(ThemeContext)
    const {sellItems, handleChange, addListing } = useContext(SellContext)

  return (
    <div>
        <form className='form--container'>
            <input
                name='title'                
                label='title'                
                className=''
                placeholder='Item'
                onChange={handleChange}
                value={sellItems.title}
            />
            <input
                name='imgUrl'                
                label='imgUrl'                
                className=''
                placeholder='Image Link'
                onChange={handleChange}
                value={sellItems.imgUrl}
            />
            <input
                type='number'
                name='price'                
                label='price'                
                className=''
                placeholder='Price'
                onChange={handleChange}
                value={sellItems.price}
            />

            <button 
                style={{cursor:"pointer"}}
                className={`${color}-theme`}
                onClick={(e) => addListing(e)}
            >
                Submit
            </button>
           
        </form>
    </div>
  )
}
