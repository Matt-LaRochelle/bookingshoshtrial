import mongoose from 'mongoose'

const TeacherSchema = new mongoose.Schema({
    name: {
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

export default mongoose.model("Teacher", TeacherSchema)