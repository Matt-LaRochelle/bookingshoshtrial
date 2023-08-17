import Student from '../models/Student.js'
import { createError } from '../utils/error.js'


//CREATE - admin and client
export const createStudent = async (req, res, next) => {
    const newStudent = new Student(req.body)

    //TODO add logic that makes sure student name and email are unique
    //One family may use the same email for their kids so email can be reused
    //But within that email "class" there needs to be unique names
    
    // Save a new student document here
    try {
        const savedStudent = await newStudent.save()
        res.status(200).json(savedStudent)
    } catch (err) {
        next (err)
    }
}


//UPDATE - admin and client
export const updateStudent = async (req, res, next) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedStudent)
    } catch (err) {
        next (err)
    }
}


//DELETE - admin
export const deleteStudent = async (req, res, next)=> {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.status(200).json("Student has been deleted.")
    } catch (err) {
        next (err)
    }
}


//GET student - admin
export const getStudent = async (req, res, next) => {
    const id = req.params.id
    try {
        const student = await Student.findById(id);
        res.status(200).json(student)
    } catch (err) {
        next (err)
    }
}


//GET Students plural - admin
export const getStudents = async (req, res, next) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        next (err)
    }
}


//LOGIN student - client
export const loginStudent = async (req, res, next) => {
    const {firstName, email} = req.body 
    console.log(firstName)

    try {
        // Check if student is already in the DB
        const foundStudent = await Student.findOne({ email })
        if (!foundStudent) return next(createError(404, "Email not found..."))
    
        // Check if first name matches
        if (foundStudent.firstName !== firstName) {
            return next(createError(404, "First Name does not match with email..."))
        }
    
        console.log("success!")
        // Return the student's information
        res.status(200).json(foundStudent)
    } catch (err) {
        next (err)
    }
}


// Booking
export const bookStudent = async (req, res, next) => {
    const { lessonDate, lessonTime, studentID } = req.body;
  
    try {
      // Retrieve the student document
      const dbStudentDoc = await Student.findById(studentID);
      console.log("DB Student Data:", dbStudentDoc);
  
      // Check if the lessonDate already exists
      const existingLessonDate = dbStudentDoc.lessonDates.find(
        (date) => date.lessonDate === lessonDate
      );
      console.log("ExistingLessonDate:", existingLessonDate)
  
      if (existingLessonDate) {
        // The lessonDate already exists, update the lessonTime
        existingLessonDate.lessonTime = lessonTime;
        console.log("Updated lessonTime:", existingLessonDate.lessonTime);
      } else {
        // The lessonDate does not exist, create a new lessonDate object
        const newLessonDate = { lessonDate: lessonDate, lessonTime: [lessonTime] };
        student.lessonDates.push(newLessonDate);
        console.log("Added new lessonDate:", newLessonDate);
      }
  
      // Save the updated student document
      const savedStudent = await student.save();
      console.log("Saved Student:", savedStudent);
  
      res.status(200).json({ message: "Booking successful." });
    } catch (err) {
      next(err);
    }
  };

