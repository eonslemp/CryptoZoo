import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Register({ setUser }) {
    let [funds, setFunds] = useState()
    let [form, setForm] = useState({
        username: '',
        usd: '',
        email: '',
        password: ''
    })

    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'


    const getFunds = async () => {
        try {
        const response = await fetch(url)
        console.log(response)
        const data = await response.json()
        console.log(data)
        setFunds(data.bitcoin.usd)
        // console.log(funds)
    } catch(e) {
        console.log('no data')
        console.log(e)
    } 
    }

    useEffect(() => {
        getFunds()
      }, [])

    console.log(funds)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({...form, usd: funds, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        alert('Registered')

        try{
            const response = await axios.post('http://localhost:9000/auth/register', form)

            const info = await axios.get('http://localhost:9000/users/info/' + form.username,{
                headers: {
                    'Authorization': `Bearer ${response.data.token}`
                }
            })
    
            localStorage.setItem('token', response.data.token)
            setUser(info.data)
            navigate('/')
    
            } catch(error){
                console.log(error.response.data.error)
                alert(error.response.data.error)
            }

    }

  return (
    <div className='register-container'>
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

