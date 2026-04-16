import { Router } from 'express';
import { login, signup, sendInvite } from '../controllers/authController';

const router = Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/invite', sendInvite);

export default router;
