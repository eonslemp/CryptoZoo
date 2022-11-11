import React from 'react'
import { useState } from 'react'
import axios from 'axios'


function Register() {
    let [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        alert('Registered')

        const response = await axios.post('http://localhost:9000/register', form)
        console.log(response)

    }

  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>User Name</label>
            <br />
            <input 
                type='text'
                id='username'
                name='username'
                onChange={handleChange}
                value={form.username}
            />
            <br />
            <label htmlFor='email'>Email</label>
            <br />
            <input 
                type='email'
                id='email'
                name='email'
                onChange={handleChange}
                value={form.email}
            />
            <br />
            <label htmlFor='password'>Password</label>
            <br />
            <input
                type='password'
                id='password'
                name='password'
                onChange={handleChange}
                value={form.password}
            />
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Register