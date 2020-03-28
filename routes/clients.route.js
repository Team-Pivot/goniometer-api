import express from 'express';
import { client } from '../controllers';

const router = express.Router();

router.get('/', client.getClients);
router.post('/', client.createClient);
router.get('/:clientId', client.getClient);
router.put('/:clientId', client.updateClient);
router.delete('/:clientId', client.deleteClient);
router.get('/:clientId/measurements', client.getMeasurements);
router.post('/:clientId/measurements', client.createMeasurement);
router.delete('/:clientId/measurements/:measureId', client.deleteMeasurement);

export default router;
