import { useState, useEffect } from 'react';
import './booking.scss'
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format'
import axios from 'axios'

const Booking = () => {
    const [lessonDate, setLessonDate] = useState('')
    const [lessonTime, setLessonTime] = useState('')
    const [teacher, setTeacher] = useState('')
    const [horse, setHorse] = useState('')
    const [listOfTeachers, setListOfTeachers] = useState([])
    const [listOfHorses, setListOfHorses] = useState([])

    useEffect(() => {
        const getTeachers = async () => {
            try {
                const teacherData = await axios.get('/teachers')
                setListOfTeachers(teacherData.data)
            } catch (err) {
                console.log(err)
            }
        }
        const getHorses = async () => {
            try {
                const horseData = await axios.get('/horses')
                setListOfHorses(horseData.data)
            } catch (err) {
                console.log(err)
            }
        }
        getTeachers()
        getHorses()
    }, [])

    const check = () => {
        console.log(lessonDate, lessonTime, teacher, horse)
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
            <input value={ lessonDate } readOnly />
            <Calendar
                date={new Date()}
                onChange={handleDate}
                minDate={today}
                maxDate={futureDate}
                color="#3d91ff"
            />

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


