import express from 'express'
import { createHorse, getHorse, getHorses } from '../controllers/horse.js' 
//import { verifyAdmin } from a utils function

const router = express.Router();

// Create
// Admin only
router.post('/', createHorse)

//Update
//Admin only

//Delete
//Admin only


//Get
router.get('/:id', getHorse)

//Get all
//This will show all the horses that are available on a specific day
router.get('/', getHorses)

export default router