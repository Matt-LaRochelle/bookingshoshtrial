import Student from '../models/Student.js'

export const createStudent = async (req, res, next) => {
    const newStudent = new Student(req.body)

    // Save a new student document here
    try {
        const savedStudent = await newStudent.save()
        res.status(200).json(savedStudent)
    } catch (err) {
        next (err)
    }
}

//update

//delete

//getStudent

//getStudents plural