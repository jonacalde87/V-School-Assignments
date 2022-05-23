import React from "react"
import Form from "./Form"
import Listing from "./Listing"
import Logo from '../images/eboyLogo.PNG'

function Home() {

    return (
        
        <div style={{marginLeft:"50px"}}>  
        <img 
            className='logo' src={Logo} alt={Logo} 
            style={{
                display: "block", 
                marginLeft: "auto",
                marginRight: "auto",
                width: "6%"
            }}


        />  
            <h1 className='header--title'>Welcome to eboy</h1>
            <h3 className='header--title'>where you can even sell your brother</h3>

            <h3>Instructions:
                <ol>
                    <li>Do not sell "illegal" products</li>
                    <li>List your item, add a picture link and a price</li>
                    <li>Shipping available: by donkey or handcarry to your residence</li>
                </ol>
            </h3>
            <Form />
            <Listing />
        </div>
    )
}

export default Home