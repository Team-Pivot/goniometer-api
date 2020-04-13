import express from 'express';
import clientRoutes from './clients.route';
import clinicRoutes from './clinics.route';

const router = express.Router();

router.use('/clients', clientRoutes);
router.use('/clinics', clinicRoutes);

export default router;
