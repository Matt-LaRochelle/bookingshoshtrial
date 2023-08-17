import mongoose from 'mongoose'

const BookingSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    studentID: {
        type: String,
        required: true
    },
    teacherName: {
        type: String,
        required: true
    },
    teacherID: {
        type: String,
        required: true
    },
    horseName: {
        type: String,
        required: true
    },
    horseID: {
        type: String,
        required: true
    },
    lessonDate: {
        type: String,
        required: true
    },
    lessonTime: {
        type: Number,
        required: true
    },
}, { timestamps: true });

export default mongoose.model("Booking", BookingSchema)