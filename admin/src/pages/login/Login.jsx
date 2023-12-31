import './login.scss'
import axios from 'axios'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [ credentials, setCredentials ] = useState({
        username: undefined,
        password: undefined
    })

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()
    
    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async e => {
        e.preventDefault()
        dispatch({type: 'LOGIN_START'})
        try {
            const res = await axios.post('/auth/login', credentials);
            const response = res.data.user
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
        <div className='login'>
            <div className='lContainer'>
                <input 
                    type="text" 
                    placeholder='name' 
                    id='name' 
                    onChange={handleChange} 
                    className='lInput' />
                <input 
                    type="email" 
                    placeholder='email' 
                    id='email' 
                    onChange={handleChange} 
                    className='lInput' />
                <button disabled={loading} onClick={handleClick} className='lButton'>Login</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}

export default Login