import React from 'react'
import Portfolio from '../components/Portfolio'


function Profile ({ username, usd }) {

  console.log(usd)

  return (
    <div>
      <h1>Hello {username[0].toUpperCase() + username.substring(1)}</h1>
      <h2>you have one bitcoin or ${usd} to invest</h2>
      <Portfolio/>
    </div>
  )
}

export default Profile