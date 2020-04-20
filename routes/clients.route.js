import express from 'express';
import { client } from '../controllers';

const router = express.Router();

router.get('/', client.list);
router.post('/', client.create);
router.get('/:client', client.get);
router.put('/:client', client.update);
router.delete('/:client', client.remove);
router.get('/:client/measurements', client.getMeasurements);
router.post('/:client/measurements', client.createMeasurement);
router.delete('/:client/measurements/:measurement', client.deleteMeasurement);

export default router;
