import Booking from '../models/Booking.js'
import Student from '../models/Student.js'
import { createError } from '../utils/error.js'

//CREATE - admin
export const createLesson = async (req, res, next) => {
    const newLesson = new Booking(req.body)
    console.log("newLesson:", newLesson)

    // Make a new lesson document

    // Once this is done you can send the info of the document to 3 other places:
    // Students, Teachers, Horses

    // Update student document to have a lesson date, time, and ID
    // Do you just need the ID or do you need date and time as well?
    try {
        const dbStudentDoc = await Student.findById(newLesson.studentID)
        console.log("DB Student Data:", dbStudentDoc);
  
        // Check if the lessonDate already exists
        const existingLessonDate = dbStudentDoc.lessons.find(
          (date) => date.lessonDate === newLesson.lessonDate
        );

        if (existingLessonDate) {
            // The lessonDate already exists, update the lessonTime
            console.log("ExistingLessonDate:", existingLessonDate)
            existingLessonDate.lessonTimes.push({time: newLesson.lessonTime})
            console.log("Updated existingLessonDate:", existingLessonDate)
        }
        // } else {
        //     // The lessonDate does not exist, create a new lessonDate object
        //     const newLessonDate = { 
        //         lessonDate: lessonDate, 
        //         lessonTimes: [lessonTime] 
        //     };
        //     dbStudentDoc.lessonDates.push(newLessonDate);
        //     console.log("Added new lessonDate:", newLessonDate);
        // }
        
        //Save the updated student document
        // const savedStudent = await dbStudentDoc.save();
        // console.log("Saved Student:", savedStudent);
    
        res.status(200).json({ message: "Booking successful." });
    } catch (err) {
        next (err)
    }
    

    
    // Update teacher document to have a lesson date and time
    // Update horse document to have a lesson date and time

    // Save a new booked lesson document here
    try {
        // const savedLesson = await newLesson.save()
        // res.status(200).json(savedLesson)
        console.log("got to here!")
    } catch (err) {
        next (err)
    }
}