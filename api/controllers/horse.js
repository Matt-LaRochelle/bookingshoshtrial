import Horse from '../models/Horse.js'
import { createError } from '../utils/error.js'

export const createHorse = async (req, res, next) => {
    const newHorse = new Horse(req.body)

    // Save a new horse document here
    try {
        const savedHorse = await newHorse.save()
        res.status(200).json(savedHorse)
    } catch (err) {
        next (err)
    }
}

//update

//delete

//get horse

//get horses plural