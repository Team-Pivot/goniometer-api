import express from 'express';
import { clinic } from '../controllers';

const router = express.Router();

router.get('/', clinic.list);
router.post('/', clinic.create);
router.get('/:clinic', clinic.get);
router.put('/:clinic', clinic.update);
router.delete('/:clinic', clinic.remove);
router.get('/:clinic/goniometers', clinic.getGoniometers);
router.post('/:clinic/goniometers', clinic.registerGoniometer);
router.put('/:clinic/goniometers/:goniometer', clinic.updateGoniometer);
router.delete('/:clinic/goniometers/:goniometer', clinic.unregisterGoniometer);

export default router;
