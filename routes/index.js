import express from 'express';
import clientRoutes from './clients.route';

const router = express.Router();

router.use('/clients', clientRoutes);

export default router;
