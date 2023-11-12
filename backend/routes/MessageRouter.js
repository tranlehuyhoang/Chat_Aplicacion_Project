import express from 'express';

import { getMessage } from '../controllers/MessageController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();
router.get('/:userId', protect, getMessage);
export default router