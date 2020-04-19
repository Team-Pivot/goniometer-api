import express from 'express';
import { client } from '../controllers';

const router = express.Router();

router.get('/', client.list);
router.post('/', client.create);
router.get('/:clientId', client.get);
router.put('/:clientId', client.update);
router.delete('/:clientId', client.remove);
router.get('/:clientId/measurements', client.getMeasurements);
router.post('/:clientId/measurements', client.createMeasurement);
router.delete('/:clientId/measurements/:measureId', client.deleteMeasurement);

export default router;
