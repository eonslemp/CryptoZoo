import React from 'react'
import Portfolio from '../components/Portfolio'
import { useState, useEffect } from 'react'

function Profile ({ username, email }) {



  return (
    <div>
      <h1>Hello {username[0].toUpperCase() + username.substring(1)}</h1>
      <h2>you have one bitcoin or {'funds'} to invest</h2>
      <Portfolio/>
    </div>
  )
}

export default Profile