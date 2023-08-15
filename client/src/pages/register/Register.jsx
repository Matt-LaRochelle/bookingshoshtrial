import './register.scss'
import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

const Register = () => {
    const [ credentials, setCredentials ] = useState({
        firstName: undefined,
        lastName: undefined,
        age: undefined,
        email: undefined,
        phone: undefined,
        firstLesson: true
    })

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({type: 'LOGIN_START'})
        try {
            const res = await axios.post('/students/', credentials);

            const response = res.data._id
            // console.log(res)
            // console.log(res.data._id)
            if (response) {
              dispatch({ type: 'LOGIN_SUCCESS', payload: response });
              
              navigate('/')
            } else {
              dispatch({
                type: 'LOGIN_FAILURE', 
                payload: {message:"You are not allowed."},
              });
            }
        } catch (err) {
            dispatch({type: 'LOGIN_FAILURE', payload: err.response})
            console.log(err)
        }
    }

    return (
        <div className='register'>
            <div className="rContainer">
                    <input 
                        type='text' 
                        className='rInput'
                        placeholder='First Name'
                        id='firstName'
                        onChange={handleChange}>
                    </input>
                    <input 
                        type='text' 
                        className='rInput'
                        placeholder='Last Name'
                        id='lastName'
                        onChange={handleChange}>
                    </input>
                    <input 
                        type='number' 
                        className='rInput'
                        placeholder='Age'
                        id='age'
                        onChange={handleChange}>
                    </input>
                    <input 
                        type='email' 
                        className='rInput'
                        placeholder='Email'
                        id='email'
                        onChange={handleChange}>
                    </input>
                    <input 
                        type='text' 
                        className='rInput'
                        placeholder='Phone'
                        id='phone'
                        onChange={handleChange}>
                    </input>
                    <button 
                        onClick={handleClick} 
                        className='rButton'
                        disabled={loading}>
                        Log In
                    </button>
                    {error && <span>{error.message}</span>}
                    <p>Already have an account? Log in <Link to="/login">here</Link></p>
            </div>
        </div>
    )
}

export default Register