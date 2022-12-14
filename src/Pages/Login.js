import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm ] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(form)
        alert('form submitted')

        try{

        const response = await axios.post('http://localhost:9000/auth/login', form)
        
        const info = await axios.get('http://localhost:9000/users/info/' + form.username, {
            headers:  {
                'Authorization': `Bearer ${response.data.token}`
            }
        })

        localStorage.setItem('token', response.data.token)
        setUser(info.data)
        navigate('/profile')

        } catch(error){
            console.log(error.response.data.error)
            alert(error.response.data.error)
        }

    }
  return (
    <div className='login-container'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username:</label>
                    <br/>
                <input 
                    type='text'
                    id='username'
                    name='username'
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