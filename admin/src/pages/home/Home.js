import Sidebar from "../../components/sidebar/Sidebar"
import './home.scss'

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <h2>This is the homepage</h2>
                <p>Put income for last 6 months here</p>
                <p>Put schedule for today here</p>
                <p>Put monthly earnings so far here</p>
            </div>
            
        </div>
    )
}

export default Home