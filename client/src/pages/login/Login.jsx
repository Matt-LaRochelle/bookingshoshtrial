import './login.scss'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

const Login = () => {
    const [ credentials, setCredentials ] = useState({
        firstName: undefined,
        email: undefined
    })

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()
    
    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        console.log(credentials)
        // dispatch({type: 'LOGIN_START'})
        try {
            const res = await axios.post('/students/login', credentials);
            // const response = res.data.user
            console.log(res)
            // if (response) {
            //   dispatch({ type: 'LOGIN_SUCCESS', payload: response });
              
            //   navigate('/')
            // } else {
            //   dispatch({
            //     type: 'LOGIN_FAILURE', 
            //     payload: {message:"You are not allowed."},
            //   });
            // }
        } catch (err) {
            // dispatch({type: 'LOGIN_FAILURE', payload: err.response})
            console.log(err)
        }
    }

    return (
        <div className='login'>
            <div className="lContainer">
                    <input 
                        type='text' 
                        className='lInput'
                        placeholder='First Name'
                        id='firstName'
                        onChange={handleChange}>
                    </input>
                    <input 
                        type='email' 
                        className='lInput'
                        placeholder='Email'
                        id='email'
                        onChange={handleChange}>
                    </input>
                    <button 
                        onClick={handleClick} 
                        className='lButton'
                        disabled={loading}>
                        Log In
                    </button>
                    {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}

export default Login