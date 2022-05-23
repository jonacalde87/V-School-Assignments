import React from 'react'
import Contact from './Contact'
import './App.css'

export default function App() {
  return (
    <div className='contacts'>
      <Contact 
        img="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_960_720.jpg"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact 
        img="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact 
        img="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact 
        img="https://cdn.pixabay.com/photo/2017/03/14/14/49/cat-2143332_960_720.jpg"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />      
    </div>
  )
}

