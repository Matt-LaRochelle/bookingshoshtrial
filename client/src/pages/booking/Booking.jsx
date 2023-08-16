import { useState, useEffect, useContext } from 'react';
import './booking.scss'
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format'
import axios from 'axios'
import {AuthContext} from '../../context/AuthContext'

const Booking = () => {
    const [lessonDate, setLessonDate] = useState('')
    const [lessonTime, setLessonTime] = useState('')
    const [teacher, setTeacher] = useState('')
    const [horse, setHorse] = useState('')
    const [listOfTeachers, setListOfTeachers] = useState([])
    const [listOfHorses, setListOfHorses] = useState([])
    const [studentData, setStudentData] = useState('')
    const [open, setOpen] = useState(false)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        //TODO - These should not be hard coded, but should be dynamic as the first
        // Item in each list which is created on the admin side.
        setLessonDate(format(new Date(), 'MM/dd/yyyy'))
        setLessonTime("11")
        setTeacher('Shoshana')
        setHorse("Bravado")
        // Get Teacher information
        const getTeachers = async () => {
            try {
                const teacherData = await axios.get('/teachers')
                setListOfTeachers(teacherData.data)
            } catch (err) {
                console.log(err)
            }
        }

        //Get Horse information
        const getHorses = async () => {
            try {
                const horseData = await axios.get('/horses')
                setListOfHorses(horseData.data)
            } catch (err) {
                console.log(err)
            }
        }

        //Get User information
        const getUser = async () => {
            try {
                const userData = await axios.get(`/students/${user}`)
                console.log("user data:", userData)
                setStudentData(userData.data)
            } catch (err) {
                console.log(err)
            }
        }
        getTeachers()
        getHorses()
        getUser()
    }, [])

    // This is the info we want to submit to the backend
    const check = async () => {
        console.log("Lesson Booking Data:", {
            lessonDate, 
            lessonTime, 
            teacher, 
            horse, 
            "student": studentData.firstName,
            "studentID": studentData._id})
        // TODO - Send this information to the backend
        try {
            const booked = await axios.post('/students/booking', {
                lessonDate, 
                lessonTime, 
                teacher, 
                horse, 
                "student": studentData.firstName,
                "studentID": studentData._id
            })
        } catch (err) {
            console.log(err)
        }
        //Backend logs the day, time, teacher, horse, and student
        //When backend sends info in the beginning, it should already
        //Block out certain day/times if the horse can't work during that time
        //First choose teacher, then choose horse, then choose day, then choose time
        //What will these documents look like?? Need to draw this out
    }

    const handleDate = (date) => {
        setLessonDate(format(date, 'MM/dd/yyyy'))
    }

    const handleTime = (e) => {
        const time = e.target.value
        setLessonTime(time)
    }

    const handleTeacher = (e) => {
        const selectedTeacher = e.target.value
        setTeacher(selectedTeacher)
    }

    const handleHorse = (e) => {
        const selectedHorse = e.target.value
        setHorse(selectedHorse)
    }

    // Create a new date object for today (or the start date)
    const today = new Date();

    // Add 42 days to the current date (this is the end date)
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 42);
    
    return (
        <div>
            <h1>Book a lesson</h1>

            <h3>Choose a date</h3>
            <input 
                value={ lessonDate } 
                readOnly 
                onClick={ () => setOpen(open => !open) } 
            />
            {open &&
            <Calendar
                date={new Date()}
                onChange={handleDate}
                minDate={today}
                maxDate={futureDate}
                color="#3d91ff"
            />
            }

            <h3>Choose a time</h3>
            <select id="myDropdown" onChange={handleTime}>
                <option value="11">11:00 AM</option>
                <option value="12">12:00 PM</option>
                <option value="1">1:00 PM</option>
                <option value="2">2:00 PM</option>
                <option value="3">3:00 PM</option>
                <option value="4">4:00 PM</option>
            </select>

            <h3>Choose a teacher</h3>
            <select id="myDropdown" onChange={handleTeacher}>
            {listOfTeachers.map((teacher) => (
                <option 
                    value={teacher.name}
                    key={teacher._id}
                >
                    {teacher.name}
                </option>

            ))}
            </select>

            <h3>Choose a horse</h3>
            <select id="myDropdown" onChange={handleHorse}>
            {listOfHorses.map((horse) => (
                <option 
                    value={horse.name}
                    key={horse._id}
                >
                    {horse.name}
                </option>

            ))}
            </select>
            <button onClick={check}>Click me!</button>
        </div>
    )
}

export default Booking


