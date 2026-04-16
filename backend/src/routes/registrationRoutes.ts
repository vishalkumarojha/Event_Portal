import { Router } from 'express';
import { registerForEvent, getEventRegistrations, checkInStudent } from '../controllers/registrationController';

const router = Router();

router.post('/', registerForEvent);
router.get('/:event_id', getEventRegistrations);
router.post('/check-in', checkInStudent);

export default router;
