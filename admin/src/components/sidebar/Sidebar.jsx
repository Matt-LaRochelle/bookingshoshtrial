import './sidebar.scss'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'>
                <Link to='/'>
                    <h2>Windmill Equestrian (Logo)</h2>
                </Link>
            </div>
            <hr></hr>
            <div className='center'>
                <ul>
                    <li>Teachers</li>
                    <li>Horses</li>
                    <li>Students</li>
                    <li>Income</li>
                    <li>Statistics</li>
                </ul>
            </div>
            <div className='bottom'>
                <p><span>Light mode</span> <span>Dark mode</span></p>
            </div>
        </div>
    )
}

export default Sidebar