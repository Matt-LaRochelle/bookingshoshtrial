import './home.scss'
import { AuthContext } from '../../context/AuthContext'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [data, setData] = useState({})
    const { user } = useContext(AuthContext)

    //Get the data on the currently signed in user
    useEffect (() => {
        const getInfo = async () => {
            try {
                const response = await axios.get(`/students/${user}`)
                setData(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        getInfo()
    }, [])

    return (
        <div>
            <h1>Welcome to this client side app {data.firstName}</h1>
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