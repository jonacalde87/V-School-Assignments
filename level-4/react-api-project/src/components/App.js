import React, { useContext } from 'react'
import { ThemeContext } from '../themeContext'
import { Routes, Route, Link } from "react-router-dom"
import Home from '../components/Home'
import Category from './Category'
import Footer from './Footer'
import About from './SignIn'
import PlantCare from '../pages/PlantCare'
import VSchoolLogo from '../images/V School Logo.avif'
import '../css/app.css'


function App() {
  const { color, toggleTheme } = useContext(ThemeContext)
  // console.log(color)

  return (
    <div className={`${color}-theme`}>
      <nav className='nav--bar'>
        {/* <img className='logo' src={Logo} alt={Logo} /> */}
        <img className='school--logo' src={VSchoolLogo}  alt={VSchoolLogo} />
        <Link to="/">Home</Link>
        <Link to="/category">Shop by Category</Link>
        <Link to="/about">Sign-in</Link>
        <button
          onClick={toggleTheme}
          className={`${color}-theme`}
          style={{ cursor: 'pointer' }}
        >
          Change theme
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/" element={<Category />} />
          {/* useParams: this route handle 3 nested routes coming from careData file*/}
          <Route path="/category/:careId" element={<PlantCare />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />

    </div>
  )
}


export default App