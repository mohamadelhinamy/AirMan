import express from 'express';
import airQualityRouter from './air-quality';

const router = express.Router();

router.use('/air-quality', airQualityRouter);

export default router;
