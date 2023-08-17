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
    lessons: [
      {
          id: {
              type: String
          },
          lessonDate: {
              type: String
          },
          lessonTimes: [
              {
                  type: Number
              }
          ]
      }
  ],
}, { timestamps: true });

export default mongoose.model("Horse", HorseSchema)