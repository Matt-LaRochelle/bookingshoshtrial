import mongoose from 'mongoose'

const LessonTimeSchema = new mongoose.Schema({
    type: Number,
  });
  
  const LessonDaySchema = new mongoose.Schema({
    Date: {
      type: Date,
    },
    Time: [LessonTimeSchema],
  });

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
    lessonDates: [LessonDaySchema],
}, { timestamps: true });

export default mongoose.model("Student", StudentSchema)