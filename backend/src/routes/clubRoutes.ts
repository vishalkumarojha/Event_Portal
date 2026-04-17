import { Router } from 'express';
import { listClubs, getClubDetails } from '../controllers/clubController';
import { protectRoute } from '../middleware/auth';

const router = Router();

// Only DSW and Directors can see the full list of clubs usually,
// but for now we'll allow any logged in organizer to view club details.
router.get('/', protectRoute, listClubs);
router.get('/:id', protectRoute, getClubDetails);

export default router;
