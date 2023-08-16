const mongoose = require('mongoose');

// Teacher model
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lessonDates: [
    {
      lessonDate: {
        type: Date,
        required: true,
      },
      lessonTime: {
        type: String,
        required: true,
      },
    },
  ],
});

const Teacher = mongoose.model('Teacher', teacherSchema);

// Student model
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lessonDates: [
    {
      lessonDate: {
        type: Date,
        required: true,
      },
      lessonTime: {
        type: String,
        required: true,
      },
    },
  ],
});

const Student = mongoose.model('Student', studentSchema);

// Horse model
const horseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lessonDates: [
    {
      lessonDate: {
        type: Date,
        required: true,
      },
      lessonTime: {
        type: String,
        required: true,
      },
    },
  ],
});

const Horse = mongoose.model('Horse', horseSchema);