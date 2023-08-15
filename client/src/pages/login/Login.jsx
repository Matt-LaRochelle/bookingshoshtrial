import './login.scss'

const Login = () => {

    const handleClick = (e) => {
        e.preventDefault()
        console.log("You clicked me!")
    }

    return (
        <div className='login'>
            <div className="lContainer">
                    <input 
                        type='text' 
                        className='lInput'
                        placeholder='First Name'>
                    </input>
                    <input 
                        type='email' 
                        className='lInput'
                        placeholder='Email'>
                    </input>
                    <button 
                        onClick={handleClick} 
                        className='lButton'>
                        Log In
                    </button>
            </div>
        </div>
    )
}

export default Login