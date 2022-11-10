import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

const Navbar = ({user, setUser}) => {

  const logout = () => {
      setUser(false)
  }

  if (user){
    return (
        <div className='navbar'>
          <Link to='/'>
            <div >
              <h1> Top7 </h1>
            </div>
          </Link>
          <Link to='/profile'>
            <div>
              <h1>Profile</h1>
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
        <Link>
          <div onClick={logout}>
            <h1>Logout</h1>
          </div>
        </Link>
      </div>
  )
  } else {
    return (
      <div>
        <div>
        <Link to='/'>Home</Link>
        </div>
        <div>
        <Link to='/login'>Login</Link>
        </div>
        <div>
          <Link to='/register'>Register</Link>
        </div>
      </div>
    )
  }
}

export default Navbar
