import mongoose from 'mongoose'

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    firstLesson: {
        type: Boolean,
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

export default mongoose.model("Student", StudentSchema)