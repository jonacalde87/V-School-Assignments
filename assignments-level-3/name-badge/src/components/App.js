import React, { useState } from 'react'
import '../css/app.css'
import DataEntry from './DataEntry'
import Badge from './Badge'

export default function App() {
  const [badgeData, setBadgeData] = useState({

    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phone: "",
    favoriteFood: "",
    aboutYourself: ""
  })

  const [badges, setBadges] = useState([])

  function handleChange(event) {
    const { name, value } = event.target
    setBadgeData(prevBadgeData => ({
      ...prevBadgeData,
      [name]: value
    }))
  }

  //****submit function****
  function handleSubmit(event) {
    event.preventDefault()
    setBadges(prevBadges => [...prevBadges, {
      firstName: badgeData.firstName,
      lastName: badgeData.lastName,
      email: badgeData.email,
      placeOfBirth: badgeData.placeOfBirth,
      phone: badgeData.phone,
      favoriteFood: badgeData.favoriteFood,
      aboutYourself: badgeData.aboutYourself
    }])
  }

  return (
    <div>
      <DataEntry
        badgeData={badgeData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {badges.map(badge => {
        return (
          <Badge {...badge}
            key={badge.firstName}
          />
        )
      })}
    </div>
    
  )
}

