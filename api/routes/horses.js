import express from 'express'
import { createHorse, updateHorse, deleteHorse, getHorse, getHorses } from '../controllers/horse.js' 
//import { verifyAdmin } from a utils function

const router = express.Router();

// Create
// Admin only
router.post('/', createHorse)

//Update
//Admin only
router.put('/:id', updateHorse)

//Delete
//Admin only
router.delete('/:id', deleteHorse)

//Get
router.get('/:id', getHorse)

//Get all
router.get('/', getHorses)

//Get all horses for a specific day
//This will show all the horses that are available on a specific day

export default router