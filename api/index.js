import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

// because we are using import and "type": "module" in package.json file -
// we must include the file extension in the import route.
import authRoute from './routes/auth.js';
import studentsRoute from './routes/students.js';
import horsesRoute from './routes/horses.js';
import teachersRoute from './routes/teachers.js';
import bookingRoute from './routes/booking.js'

// import cookieParser from 'cookie-parser';
import cors from 'cors'



const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB!")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
})
mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected!")
})

// middlewares
app.use(cors())
// app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoute);
app.use('/api/teachers', teachersRoute)
app.use('/api/horses', horsesRoute)
app.use('/api/students', studentsRoute);
app.use('/api/booking', bookingRoute)


app.use((err, req, res, next)=> {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});


app.listen(8800, () => {
    connect()
    console.log("Connected to backend!")
})