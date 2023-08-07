import express from 'express'
import { createHorse } from '../controllers/horse.js' 
//import { verifyAdmin } from a utils function

const router = express.Router();

// Create
// Admin only
router.post('/horse', createHorse)

//Update
//Admin only

//Delete
//Admin only


//Get

//Get all
//This will show all the horses that are available on a specific day

export default router