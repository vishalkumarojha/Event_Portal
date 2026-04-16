import { Router } from 'express';
import { submitReport, getReports, updateReportStatus } from '../controllers/reportController';

const router = Router();

router.post('/', submitReport);
router.get('/', getReports);
router.patch('/:id/status', updateReportStatus);

export default router;
