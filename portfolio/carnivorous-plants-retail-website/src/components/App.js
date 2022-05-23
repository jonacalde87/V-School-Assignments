import React from 'react'
import '../css/app.css'

import Home from '../pages/Home'
import Care from './Care'
import { Routes, Route, Link } from "react-router-dom"
import Footer from './Footer'
import About from './About'

import PlantCare from '../pages/care/PlantCare'

export default function App() {
  return (
    <div>
      <nav className='nav--bar'>
        <Link to="/">Home</Link>
        <Link to="/care">Plant Care</Link>
        <Link to="/about">About us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* this route handle 3 nested routes in the Care component*/}
        <Route path="/care/" element={<Care />} />
          <Route path="/care/:careId" element={<PlantCare />} />              
        <Route path="/about" element={<About />} />
      </Routes>
      
      <Footer />
    </div>
  )
}