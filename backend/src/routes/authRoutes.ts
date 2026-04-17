import { Router } from 'express';
import { login, createClub, createDirector } from '../controllers/authController';
import { protectRoute, isDSW } from '../middleware/auth';

const router = Router();

router.post('/login', login);

// Admin only routes
router.post('/create-club', protectRoute, isDSW, createClub);
router.post('/create-director', protectRoute, isDSW, createDirector);

export default router;
