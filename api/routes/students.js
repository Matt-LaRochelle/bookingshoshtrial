import express from 'express'
import { 
    createStudent, 
    // bookStudent,
    updateStudent, 
    loginStudent, 
    getStudent, 
    getStudents, 
    deleteStudent } from '../controllers/student.js' 
//import { verifyAdmin } from a utils function

const router = express.Router();

//Create Admin + Client
router.post('/', createStudent)

//Update - Admin only - WELL STUDENTS SHOULD  be able to update their information as well
router.put('/:id', updateStudent)

//Delete - Admin
router.delete('/:id', deleteStudent)

//For logging in from client side
router.post('/login', loginStudent)

//For booking a lesson from client side
// router.post('/booking', bookStudent)

//Get - Admin and Client
router.get('/:id', getStudent)

//Get all - Admin
router.get('/', getStudents)

export default router