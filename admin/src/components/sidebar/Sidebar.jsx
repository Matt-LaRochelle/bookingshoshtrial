import './sidebar.scss'
import { Link } from 'react-router-dom'
import l2 from '../../images/l2.png'

const Sidebar = () => {
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
                    <li>Teachers</li>
                    <li>Horses</li>
                    <li>Students</li>
                    <li>Schedule</li>
                    <li>Income</li>
                    <li>Statistics</li>
                </ul>
            </div>
            <div className='bottom'>
                <p><span>Light</span> <span>Dark</span></p>
            </div>
        </div>
    )
}

export default Sidebar