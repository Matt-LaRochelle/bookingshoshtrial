import mongoose from 'mongoose'

const HorseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    unavailableDates: {
        type: [Date]
    }
}, { timestamps: true });

export default mongoose.model("Horse", HorseSchema)