import express from 'express';
import { clinic } from '../controllers';

const router = express.Router();

router.get('/', clinic.getClinics);
router.post('/', clinic.createClinic);
router.get('/:clinic', clinic.getClinic);
router.put('/:clinic', clinic.updateClinic);
router.delete('/:clinic', clinic.deleteClinic);

export default router;
