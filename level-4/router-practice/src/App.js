import React from 'react'
import {Routes, Route, Link} from "react-router-dom"

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Careers from './Careers';

function App() {
  return (
    <div className="App">
      <nav> 
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/careers">Careers</Link>
      </nav>
      
      <Routes>
        <Route path="/"
          element={<Home /> }/>
        
        <Route path='/about'
          element={<About />} />
        
        <Route path='/contact'
          element={<Contact />} />

        <Route path='/careers'
          element={<Careers />} />             
      </Routes>
    </div>
  );
}

export default App;

