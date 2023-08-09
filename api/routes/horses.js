import express from 'express'
import { createHorse, getHorses } from '../controllers/horse.js' 
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
router.get('/', getHorses)

export default router