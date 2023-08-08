import Teacher from '../models/Teacher.js'
import { createError } from '../utils/error.js'

export const createTeacher = async (req, res, next) => {
    const newTeacher = new Teacher(req.body)

    // Save a new teacher document here
    try {
        const savedTeacher = await newTeacher.save()
        res.status(200).json(savedTeacher)
    } catch (err) {
        next (err)
    }
}

//update

//delete

//get teacher

//get teachers plural
export const getTeachers = async (req, res, next) => {
    try {
        const teachers = await Teacher.find();
        res.status(200).json(teachers);
    } catch (err) {
        next (err)
    }
}