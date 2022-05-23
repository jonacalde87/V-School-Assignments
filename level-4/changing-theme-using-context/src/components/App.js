import React from 'react'
import '../css/styles.css'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'
import {ThemeContextProvider} from '../themeContext'

// 2. provider in this component because it has all the child components we want to change: navbar, main, footer
export default function App() {

  return (
    <>
      <ThemeContextProvider>
        <Navbar />
        <Main />
        <Footer />
      </ThemeContextProvider>
          
    </>
  )
}

