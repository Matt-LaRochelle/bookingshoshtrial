import mongoose from 'mongoose'

const TeacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    unavailableDates: {
        type: [Date]
    }
}, { timestamps: true });

export default mongoose.model("Teacher", TeacherSchema)