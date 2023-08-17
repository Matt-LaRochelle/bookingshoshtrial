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
    lessons: [
        {
            lessonDate: {
                type: String
            },
            lessonTimes: [
                {
                    time: {
                        type: Number
                    },
                    id: {
                        type: String
                    }
                },
            ]
        }
    ],
    // lessonDates: [
    //     {
    //         lessonDate: {
    //         type: String
    //         }, 
    //         lessonTimes: [
    //             {
    //                 type: Number
    //             }
    //         ]
    //     }
    // ],
}, { timestamps: true });

export default mongoose.model("Student", StudentSchema)


// {
//     lessons: [
//         {
//             lessonDate: "08/20/24",
//             lessonTimes: [
//                 {
//                     Time: 1, 
//                     ID: "646bcdkhwle"
//                 }, 
//                 {
//                     Time: 2, 
//                     ID: "646kdieflkc"
//                 }
//             ]
//         }
//     ]
// }