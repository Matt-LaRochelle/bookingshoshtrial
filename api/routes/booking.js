import express from 'express'
import { createLesson } from '../controllers/booking.js' 
//import { verifyAdmin } from a utils function

const router = express.Router();

// Create - Admin + Client
router.post('/', createLesson)

//Update - Admin only
// router.put('/:id', updateHorse)

// //Delete - Admin + Client
// router.delete('/:id', deleteHorse)

// //Get
// router.get('/:id', getHorse)

// //Get all
// router.get('/', getHorses)

//Get all horses for a specific day
//This will show all the horses that are available on a specific day

export default router