import express from 'express';
import { route } from '../core/route';
import { airMeasurmentService } from '../modules/AirMeasurment/services/AirMeasurmentService';

const router = express.Router();

router.get(
  '/',
  route(async (req, res) => {
    const query = airMeasurmentService.getAirQualitySchema.parse(
        req.query,
      );
    const response = await airMeasurmentService.findLatestAndUpdateIfExpired(query)
    res.status(200).json(response);
  }),
);

export default router;
