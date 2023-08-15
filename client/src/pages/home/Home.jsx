import './home.scss'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'

const Home = () => {

    const { user } = useContext(AuthContext)

    console.log(user)

    return (
        <div>
            <h1>Welcome to this client side app {user}</h1>
            <ul>
                <li>Book a lesson</li>
                <li>Past lessons</li>
                <li>Upcoming Schedule - have them email to confirm cancellations</li>
                <li>Profile Settings - have them email a link to change things</li>
            </ul>
        </div>
    )
}

export default Home