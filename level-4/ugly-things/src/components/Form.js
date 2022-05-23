import React, { useContext } from 'react'
import { UglyContext } from '../uglyContext'

export default function Form() {
  const formStyle = {
    border: "solid",
    padding: "50px", 
  }
  
  //3. consumer --dont forget to import--
  //values destructured
  const { uglyThings, handleChange, addUglyThing } = useContext(UglyContext)

  
  return (
    <div className='form--container'>
        <form style={formStyle}>
            <input
              name='title'
              id='outlined-name'
              label='TITLE'
              required
              className='input-title'
              placeholder='Title' 
              onChange={handleChange}
              value={uglyThings.title}
            />
            <input
              name='imgUrl'
              id='outlined-name'
              label='IMG URL'
              required
              placeholder='Img URL' 
              onChange={handleChange}
              value={uglyThings.imgUrl} //from state dot notation and object { state.object }
            />

            <input
              name='description'
              id='outlined-name'
              label='DESCRIPTION'
              required
              placeholder='Description'
              onChange={handleChange}
              value={uglyThings.description}
            />

            <button onClick={addUglyThing}>Submit</button>
        </form>
    </div>
  )
}
