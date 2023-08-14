import express from 'express'
//import { verifyAdmin } from a utils function
import { adminLogin } from '../controllers/admin.js'

const router = express.Router();

// Admin - Login
router.post('/login', adminLogin);

export default router