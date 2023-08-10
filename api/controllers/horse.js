import Horse from '../models/Horse.js'
import { createError } from '../utils/error.js'

//CREATE
export const createHorse = async (req, res, next) => {
    console.log("step 3")
    const newHorse = new Horse(req.body)
    console.log(newHorse)

    // Save a new horse document here
    try {
        const savedHorse = await newHorse.save()
        res.status(200).json(savedHorse)
    } catch (err) {
        next (err)
    }
}

//UPDATE


//DELETE

//GET horse
export const getHorse = async (req, res, next) => {
    const id = req.params.id
    try {
        const horse = await Horse.findById(id);
        res.status(200).json(horse)
    } catch (err) {
        next (err)
    }
}

//GET horses plural
export const getHorses = async (req, res, next) => {
    try {
        const horses = await Horse.find();
        res.status(200).json(horses);
    } catch (err) {
        next (err)
    }
}