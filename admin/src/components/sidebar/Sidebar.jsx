import './sidebar.scss'
import { Link } from 'react-router-dom'
import l2 from '../../images/l2.png'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'

const Sidebar = () => {
    const { dispatch } = useContext(AuthContext)

    const logout = () => {
        dispatch({type: 'LOGOUT'})
    }
    
    return (
        <div className='sidebar'>
            <div className='top'>
                <Link to='/'>
                    <img src={l2} alt="windmill equestrian logo" />
                </Link>
            </div>
            <hr></hr>
            <div className='center'>
                <ul>
                    <Link to="/teachers" style={{textDecoration: "none"}}>
                        <li>Teachers</li>
                    </Link>
                    <Link to="/horses" style={{textDecoration: "none"}}>
                        <li>Horses</li>
                    </Link>
                    <Link to="/students" style={{textDecoration: "none"}}>
                        <li>Students</li>
                    </Link>
                    <li>Schedule</li>
                    <li>Income</li>
                    <li>Statistics</li>
                    <button onClick={logout}>Log Out</button>
                </ul>
            </div>
            <div className='bottom'>
                <p><span>Light</span> <span>Dark</span></p>
            </div>
        </div>
    )
}

export default Sidebar