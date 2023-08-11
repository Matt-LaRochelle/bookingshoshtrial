import './edit.scss'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Sidebar from '../../components/sidebar/Sidebar'

const Edit = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const id = location.pathname.split("/")[3];
    const [newObject, setNewObject] = useState({})
    const navigate = useNavigate()

    const { data, loading, error } = useFetch(`/${path}/${id}`);

    // useEffect(() => {
    //     if (path === "horses") {
    //       setHorseName(data.name)
    //     } else if (path === "teachers") {
    //       setTeacherName(data.name)
    //     } else if (path === "students") {
    //       setStudentName(data.firstName)
    //     } else {
    //       console.log("The end.")
    //     }
    //   }, [data, path]);

    const handleChange = (e) => {
        setNewObject((prev) => ({ ...prev, [e.target.id]: e.target.value}));
        console.log(newObject)
    };

    const handleClick = (e) => {
        e.preventDefault()
        console.log("You clicked me!")
        // Add the put axios call here
        console.log(newObject)
    }


    return (
        <div className='edit'>
            <Sidebar />
            <div className='editContainer'>

            Edit page
            {path === "horses" && 
                    <div>
                        <h1>Edit Horse</h1>
                        <form className='newCard'>
                            <label>Name:</label>
                            <input onChange={handleChange} type="text" id="name" placeholder={data.name} ></input>
                            <label>Description:</label>
                            <input onChange={handleChange} type="text" id="description" placeholder={data.description}></input>
                            <button onClick={handleClick}>Submit</button>
                        </form>
                    </div>}
                {path === "teachers" && 
                    <div>
                        <h1>Edit Teacher</h1>
                        <form className='newCard'>
                            <label>Name:</label>
                            <input onChange={handleChange} type="text" id="name" placeholder={data.name}></input>
                            <button onClick={handleClick}>Submit</button>
                        </form>
                    </div>}
                {path === "students" && 
                    <div>
                        <h1>Edit Student</h1>
                        <form className='newCard'>
                            <label>First Name:</label>
                            <input onChange={handleChange} type="text" id="firstName" placeholder={data.firstName}></input>
                            <label>Last Name:</label>
                            <input onChange={handleChange} type="text" id="lastName" placeholder={data.lastName}></input>
                            <label>Age:</label>
                            <input onChange={handleChange} type="number" id="age" placeholder={data.age}></input>
                            <label>Email:</label>
                            <input onChange={handleChange} type="email" id="email" placeholder={data.email}></input>
                            <label>Phone:</label>
                            <input onChange={handleChange} type="text" id="phone" placeholder={data.phone}></input>
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

export default Edit