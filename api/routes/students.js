import express from 'express'
import { createStudent, loginStudent, getStudent, getStudents, deleteStudent } from '../controllers/student.js' 
//import { verifyAdmin } from a utils function

const router = express.Router();

// Create
router.post('/', createStudent)

//Update
//Admin only - WELL STUDENTS SHOULD  be able to update their information as well

//Delete
//Admin only
router.delete('/:id', deleteStudent)

//For logging in from client side
router.post('/login', loginStudent)

//Get
//Also get for Admin
router.get('/:id', getStudent)

//Get all
//Admin only
router.get('/', getStudents)

export default router