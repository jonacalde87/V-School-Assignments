import React from 'react'

export default function Contact({img, name, phone, email}) { //destructuring, remove word props and add parameters only

  return (
    <div className="contact-card">
            <img src={img}/> 

            <h3>{name}</h3>

            <div className="info-group">
                <img className='phone-icon' src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" />
                <p>{phone}</p>
            </div>

            <div className="info-group">
                <img className='email-icon' src="https://pnggrid.com/wp-content/uploads/2021/12/Email-Icon-Png-Transparent.png" />
                <p>{email}</p>
            </div>

        </div>
  )
}
