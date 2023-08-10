import express from 'express'
import { createTeacher, deleteTeacher, getTeachers, getTeacher } from '../controllers/teacher.js' 
//import { verifyAdmin } from a utils function

const router = express.Router();

// Create
// Admin only
router.post('/', createTeacher)

//Update
//Admin only

//Delete
router.delete('/:id', deleteTeacher)

//Get
router.get('/:id', getTeacher)
//Get all
router.get('/', getTeachers)
//This will show all the teachers that are available on a specific day

export default router