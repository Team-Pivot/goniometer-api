import express from 'express';
import { clinic } from '../controllers';

const router = express.Router();

router.get('/', client.getClinics);
router.post('/', client.createClinic);
router.get('/:clinic', client.getClinic);
router.put('/:clinic', client.updateClinic);
router.delete('/:clinic', client.deleteClinic);

export default router;
