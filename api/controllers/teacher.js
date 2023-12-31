import Teacher from '../models/Teacher.js'
import { createError } from '../utils/error.js'

//CREATE - admin
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

//UPDATE - admin
export const updateTeacher = async (req, res, next) => {
    try {
        const updatedTeacher = await Teacher.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedTeacher)
    } catch (err) {
        next (err)
    }
}

//DELETE - admin
export const deleteTeacher = async (req, res, next) => {
    try {
        await Teacher.findByIdAndDelete(req.params.id);
        res.status(200).json("Teacher has been deleted.")
    } catch (err) {
        next (err)
    }
}

//GET teacher - admin and client
export const getTeacher = async (req, res, next) => {
    const id = req.params.id
    try {
        const teacher = await Teacher.findById(id)
        res.status(200).json(teacher)
    } catch (err) {
        next (err)
    }
}

//GET teachers plural - admin and client
export const getTeachers = async (req, res, next) => {
    try {
        const teachers = await Teacher.find();
        res.status(200).json(teachers);
        console.log("Got teachers!")
    } catch (err) {
        next (err)
    }
}