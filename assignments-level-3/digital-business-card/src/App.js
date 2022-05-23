import React from "react"
import Image from "./Image"
import Info from "./Info"
import About from "./About"
import Footer from "./Footer"

export default function App() {
    return (
        <div className="container">
            <Image />
            <Info />
            <About />            
            <Footer />
        </div>
    )
}