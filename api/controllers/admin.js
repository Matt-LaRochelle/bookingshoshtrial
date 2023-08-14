import dotenv from 'dotenv'

export const adminLogin = (req, res, next) => {
    const {name, email} = req.body
    console.log("Made it to here!")

    if (name === process.env.ADMIN) {
        if (email === process.env.EMAIL) {
            res.status(200).json({"user": process.env.ADMIN})
            console.log("step 2")
        } else {
            res.status(400).json({"Denied": "Denied"})
            console.log("step 3")
        }
    } else {
        res.status(400).json({"Denied": "Denied"})
        console.log("step 4")
    }
}