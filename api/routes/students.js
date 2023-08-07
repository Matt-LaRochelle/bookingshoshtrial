import express from 'express'
import { createStudent } from '../controllers/student.js' 
//import { verifyAdmin } from a utils function

const router = express.Router();

// Create
router.post('/student', createStudent)

//Update
//Admin only

//Delete
//Admin only

//Get
//For logging in from client side
//Also get for Admin

//Get all
//Admin only

export default router