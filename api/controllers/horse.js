import Horse from '../models/Horse.js'
import { createError } from '../utils/error.js'

//CREATE
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

//UPDATE
export const updateHorse = async (req, res, next) => {
    try {
        const updatedHorse = await Horse.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedHorse)
    } catch (err) {
        next (err)
    }
}

//DELETE
export const deleteHorse = async (req, res, next)=> {
    try {
        await Horse.findByIdAndDelete(req.params.id);
        res.status(200).json("Horse has been deleted.")
    } catch (err) {
        next (err)
    }
}

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