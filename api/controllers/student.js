import Student from '../models/Student.js'
import { createError } from '../utils/error.js'

export const createStudent = async (req, res, next) => {
    const newStudent = new Student(req.body)

    // Save a new student document here
    try {
        const savedStudent = await newStudent.save()
        res.status(200).json(savedStudent)
    } catch (err) {
        next (err)
    }
}

//update

//delete

//getStudent
export const getStudent = async (req, res, next) => {
    const {firstName, email} = req.body 

    // Check if student is already in the DB
    const foundStudent = await Student.findOne({ email })
    if (!foundStudent) return next(createError(404, "Email not found..."))

    // Check if first name matches
    if (foundStudent.firstName !== firstName) {
        return next(createError(404, "First Name does not match with email..."))
    }

    // Return the student's information
    res.status(200).json(foundStudent)

}

//getStudents plural
export const getStudents = async (req, res, next) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        next (err)
    }
}