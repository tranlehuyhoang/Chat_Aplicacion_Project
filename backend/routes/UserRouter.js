import express from 'express';

import { registerUser, authUser, getProfileUser, getAllUser, updateAvatar, updateNickname } from '../controllers/UserController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();
router.post('/register', registerUser);
router.post('/auth', authUser);
router.get('/all', getAllUser);
router.put('/update-avatar/:userid', updateAvatar);
router.put('/update-nickname/:userid', updateNickname);



export default router