import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Link to='/'>
        <div className='navbar'></div>
        <h1> Crypto <span className='purple'>Zoo</span></h1>
    </Link>
  )
}

export default Navbar
