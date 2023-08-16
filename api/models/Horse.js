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
    lessonDates: [
        {
          lessonDate: {
            type: Date,
          },
          lessonTime: {
            type: String,
          },
        },
      ],
}, { timestamps: true });

export default mongoose.model("Horse", HorseSchema)