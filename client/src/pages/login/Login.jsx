import './login.scss'

const Login = () => {

    const handleClick = () => {
        console.log("You clicked me!")
    }
    
    return (
        <div>
            <form>
                <label>First Name</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <button onClick={handleClick}>Log In</button>
            </form>
        </div>
    )
}

export default Login