import express from 'express';
import clientRoutes from './clients.route';
import clinicRoutes from './clinics.route';
import goniometerRoutes from './goniometer.route';

const router = express.Router();

router.use('/clients', clientRoutes);
router.use('/clinics', clinicRoutes);
router.use('/goniometers', goniometerRoutes);

export default router;
