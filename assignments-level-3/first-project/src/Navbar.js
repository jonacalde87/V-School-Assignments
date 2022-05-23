import React from "react"
import logo from "./images/react-icon-small.png"

export default function Navbar() {
    return (
        <nav>
            <img className="logo" src={logo} alt="" />
            <h3 className="logo-text">ReactFacts</h3>
            <h4 className="extra-title">React Course - Project 1</h4>
        </nav>
    )
}