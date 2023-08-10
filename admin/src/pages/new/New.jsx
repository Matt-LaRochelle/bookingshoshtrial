import './new.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';

const New = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const [newObject, setNewObject] = useState({})

    const handleChange = (e) => {
        setNewObject((prev) => ({ ...prev, [e.target.id]: e.target.value}));
        console.log(newObject)
    };



    const handleClick = async (e) => {
        e.preventDefault()
        console.log(newObject)
        try {
            await axios.post(`http://localhost:8800/api/${path}`, JSON.stringify(newObject))
            console.log("success!")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='new'>
            <Sidebar />
            <div className='newContainer'>
                {path === "horses" && 
                    <div>
                        <h1>Add a New Horse</h1>
                        <form className='newCard'>
                            <label>Name:</label>
                            <input onChange={handleChange} type="text" id="name"></input>
                            <label>Description:</label>
                            <input onChange={handleChange} type="text" id="description"></input>
                            <button onClick={handleClick}>Submit</button>
                        </form>
                    </div>}
                {path === "teachers" && 
                    <div>
                        <h1>Add a New Teacher</h1>
                        <form className='newCard'>
                            <label>Name:</label>
                            <input onChange={handleChange} type="text" id="name"></input>
                            <label>Description:</label>
                            <input onChange={handleChange} type="text" id="description"></input>
                            <button onClick={handleClick}>Submit</button>
                        </form>
                    </div>}
                {path === "students" && 
                    <div>
                        <h1>Add a New Student</h1>
                        <form className='newCard'>
                            <label>First Name:</label>
                            <input onChange={handleChange} type="text" id="firstName"></input>
                            <label>Last Name:</label>
                            <input onChange={handleChange} type="text" id="lastName"></input>
                            <label>Age:</label>
                            <input onChange={handleChange} type="number" id="age"></input>
                            <label>Email:</label>
                            <input onChange={handleChange} type="email" id="email"></input>
                            <label>Phone:</label>
                            <input onChange={handleChange} type="text" id="phone"></input>
                            <div className='firstLesson'>
                                <label>First Lesson:</label>
                                <input onChange={handleChange} type="radio" name="yesNoRadio" id="firstLesson" value="true" />Yes
                                <input onChange={handleChange} type="radio" name="yesNoRadio" id="firstLesson" value="false" />No
                            </div>
                            <button onClick={handleClick}>Submit</button>
                        </form>
                    </div>}
            </div>
        </div>
    )
}

export default New