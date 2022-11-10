import React from 'react'
import { useState } from 'react'

function Login() {

    let [form, setForm ] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        alert('form submitted')
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username:</label>
                    <br/>
                <input 
                    type='text'
                    id='username'
                    onChange={handleChange}
                    value={form.username}
                />
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <br />
                <input 
                    type='password'
                    id='password'
                    name='password'
                    onChange={handleChange}
                    value={form.password}
                    />
                </div>
                    <br />
                <button>Submit</button>
        </form>
    </div>
  )
}

export default Login;