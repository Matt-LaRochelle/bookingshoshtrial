import Booking from '../models/Booking.js'
import { createError } from '../utils/error.js'

//CREATE - admin
export const createLesson = async (req, res, next) => {
    const newLesson = new Booking(req.body)

    // First check that ID's match teachers - or I suppose the frontend
    // already does this...

    // Update student document to have a lesson date and time

    // Update teacher document to have a lesson date and time

    // Update horse document to have a lesson date and time

    // Save a new booked lesson document here
    try {
        const savedLesson = await newLesson.save()
        res.status(200).json(savedLesson)
    } catch (err) {
        next (err)
    }
}