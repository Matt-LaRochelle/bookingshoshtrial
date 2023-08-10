import { useLocation, useNavigate } from 'react-router-dom';
import './single.scss'
import useFetch from '../../hooks/useFetch';
import Sidebar from '../../components/sidebar/Sidebar'


const Single = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const id = location.pathname.split("/")[2];
    const navigate = useNavigate()

    const { data, loading, error } = useFetch(`/${path}/${id}`);

    console.log("path:", path)
    console.log("id:", id)
    console.log("fetched data:", data)

    const handleClick = () => {
        console.log("You clicked me!")
        navigate(`/${path}/edit/${id}`)
    }

    return (
        <div className="single">
            <Sidebar />
            <div className='singleContainer'>
                <p>Single page layout</p>
                {path === "teachers" &&
                <div>
                    <p>Information/Photo card</p>
                    <h2>{data.name}</h2>
                </div>
                }
                {path === "horses" &&
                <div>
                    <p>Information/Photo card</p>
                    <h2>{data.name}</h2>
                    <p>{data.description}</p>
                </div>
                }
                {path === "students" &&
                <div>
                    <p>Information/Photo card</p>
                    <h2>{data.firstName + " " + data.lastName}</h2>
                    <p>Age: {data.age}</p>
                    <p>Email: {data.email}</p>
                    <p>Phone: {data.phone}</p>
                    <p>First Lesson: {data.firstLesson === true ? "True" : "False"}</p>
                </div>
                }
                <button onClick={handleClick}>Edit Information</button>
                <p>Stats for last 6 months</p>
                <p>Most recent transactions</p>
            </div>
        </div>
    )
}

export default Single