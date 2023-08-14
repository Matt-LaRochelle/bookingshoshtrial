import dotenv from 'dotenv'

export const adminLogin = (req, res, next) => {
    const {name, email} = req.body

    if (name === process.env.ADMIN) {
        if (email === process.env.EMAIL) {
            res.status(200).json({"login": "successful!"})
        } else {
            res.status(400).json({"Denied": "Denied"})
        }
    } else {
        res.status(400).json({"Denied": "Denied"})
    }
}