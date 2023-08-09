import express from 'express'
import { createStudent, getStudent, getStudents } from '../controllers/student.js' 
//import { verifyAdmin } from a utils function

const router = express.Router();

// Create
router.post('/student', createStudent)

//Update
//Admin only

//Delete
//Admin only


//For logging in from client side
router.post('/login', getStudent)

//Get
//Also get for Admin

//Get all
//Admin only
router.get('/', getStudents)

export default router