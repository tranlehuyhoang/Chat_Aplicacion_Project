import express from 'express';

import { registerUser, authUser, getProfileUser, getAllUser } from '../controllers/UserController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();
router.post('/register', registerUser);
router.post('/auth', authUser);
router.get('/all', getAllUser);



export default router