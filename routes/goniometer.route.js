import express from 'express';
import { goniometer } from '../controllers';

const router = express.Router();

router.get('/', goniometer.list);
router.post('/', goniometer.create);
router.get('/:goniometer', goniometer.get);
router.put('/:goniometer', goniometer.update);
router.delete('/:goniometer', goniometer.remove);

export default router;
