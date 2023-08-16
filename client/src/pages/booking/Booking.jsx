import { useState } from 'react';
import './booking.scss'
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Booking = () => {
    const [lessonDate, setLessonDate] = useState('')

    const handleSelect = (date) => {
        console.log(date); // native Date object
        setLessonDate(date)
        console.log(lessonDate)
    }

    // Create a new date object for today (or the start date)
    const today = new Date();

    // Add 42 days to the current date (this is the end date)
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 42);
    
    return (
        <div>
            <h1>Book a lesson</h1>
            <Calendar
                date={new Date()}
                onChange={handleSelect}
                minDate={today}
                maxDate={futureDate}
            />
            <p>Date picker first</p>
            <p>Date picker should be limited to 1 month - this should be adjustable on the admin side</p>
            <p>Time picker next</p>
            <p>Time picker should be between 11am-5pm - this should be adjustable on the admin side</p>
            <p>Then pick a teacher between the 2 that exist</p>
            <p>Teachers should have a limit on how many lessons they can do per day</p>
            <p>Then pick horses from the ones which are available</p>
            <p>Horses should have a limit on how many lessons they can do per day</p>
        </div>
    )
}

export default Booking


