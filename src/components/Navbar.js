import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
    <Link to='/'>
        <div >
          <h1> Top7 </h1>
        </div>
    </Link>
    <Link to="/converter">
        <div>
          <h1>Converter</h1>
        </div>

    </Link>
    <Link to="/trending">
        <div>
          <h1>Trending</h1>
        </div>

    </Link>

    </div>
  )
}

export default Navbar
