import Sidebar from "../../components/sidebar/Sidebar"
import './home.scss'

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <h2>This is the homepage</h2>
            </div>
            
        </div>
    )
}

export default Home