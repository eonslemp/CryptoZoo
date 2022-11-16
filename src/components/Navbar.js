import React from 'react'
import '../App.css';
import { Link, useNavigate} from 'react-router-dom'


const Navbar = ({user, setUser}) => {

  const navigate = useNavigate()

  const logout = () => {
      setUser({})
      localStorage.removeItem('token')
      navigate('/')

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
        {/* <Link to="/converter">
            <div>
              <h1>Converter</h1>
            </div>
        </Link> */}
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
      <div className='navbar'>
        <Link to='/'>
          <div>
            <h1>Home</h1>
          </div>
        </Link>
        <Link to='/login'>
          <div>
            <h1>Login</h1>
          </div>
        </Link>
        <Link to='/register'>
          <div>
            <h1>Register</h1>
          </div>
        </Link>
      </div>
    )
  }
}

export default Navbar
