import { Router } from 'express';
import { createEvent, getEvents, updateEventStatus } from '../controllers/eventController';

const router = Router();

router.post('/', createEvent);
router.get('/', getEvents);
router.patch('/:id/status', updateEventStatus);

export default router;
