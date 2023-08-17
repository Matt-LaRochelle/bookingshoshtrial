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


//Booking
export const bookStudent = async (req, res, next) => {
    const { lessonDate, lessonTime, studentID } = req.body;

    try {
        // We need to check if the date has already been picked
        const data = await Student.findById(studentID)
        console.log("DB Student Data:", data)
        console.log("DB lessonDate:", data.lessonDates[0].lessonDate)
        console.log("Client side lesson date:", lessonDate)

        // Loop through each lesson date to see if it already exists
        data.lessonDates.forEach(function (object, index) {
            if (object.lessonDate === lessonDate) {
                //This mean the date has already been picked. Only update the time
                console.log("found.")
            } else {
                console.log("That date does not exist.")
                //This means the date is completely open. Update date and time
                const trial = await Student.findByIdAndUpdate(
                        studentID,
                        { $set: {lessonDates: [ {lessonDate}]} },
                        { new: true }
                        )
                    console.log("trial", trial) 
            }
            })
            console.log(`Element at index ${index}: ${object.lessonDate}`)
        res.status(200).json({"message": "Everything got through."})
        // Then within the date there can be 6 times for that day.
        // Times must be nested inside of days

        // const trial = await Student.findByIdAndUpdate(
        //     studentID,
        //     { $set: {lessonDates: [ {lessonDate}]} },
        //     { new: true }
        //     )
        // console.log("trial", trial)
        // res.status(200).json({"message": "Everything got through."})
    } catch (err) {
        next (err)
    }
}

