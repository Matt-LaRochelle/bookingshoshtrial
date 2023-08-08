import express from 'express'
import { createTeacher, getTeachers } from '../controllers/teacher.js' 
//import { verifyAdmin } from a utils function

const router = express.Router();

// Create
// Admin only
router.post('/teacher', createTeacher)

//Update
//Admin only

//Delete
//Admin only


//Get
//Get all
router.get('/', getTeachers)
//This will show all the teachers that are available on a specific day

export default router