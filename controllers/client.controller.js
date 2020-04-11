import validate from 'validate.js';
import validations from './validations';
import services from '../services';

async function getClients(req, res, next) {
  const clientList = await services.listClients();
  return res.json(clientList);
}

async function createClient(req, res, next) {
  return res.json({ message: 'not yet implemented' });
}

async function getClient(req, res, next) {
  return res.json({ message: 'not yet implemented' });
}

async function updateClient(req, res, next) {
  return res.json({ message: 'not yet implemented' });
}

async function deleteClient(req, res, next) {
  return res.json({ message: 'not yet implemented' });
}

async function getMeasurements(req, res, next) {
  return res.json({ message: 'not yet implemented' });
}

async function createMeasurement(req, res, next) {
  const params = {
    angle: parseFloat(req.body.angle), // required, should be a XXX.XX decimal
    endAngle: req.body.endAngle != null ? parseFloat(req.body.endAngle) : undefined, // not required, should be a XXX.XX decimal
    jointType: req.body.jointType, // expect a string name that is only alphanumeric, hyphens, or apostrophes
    measurementType: req.body.measurementType, // expect a string name that is only alphanumeric, hyphens, or apostrophes
    client: req.params.clientId, // expect a string UUID
    clinic: req.body.clinic, // expect a string UUID
  };
  console.log(params, req.body);
  const formattingErrors = validate(params, {
    angle: validations.angle(),
    endAngle: validations.angle({ presence: false }),
    jointType: validations.measurementTypes(),
    measurementType: validations.measurementTypes(),
    clinic: validations.uuid(),
    client: validations.uuid(),
  });

  if (formattingErrors != undefined) {
    return res.status(400).json({
      errors: formattingErrors,
    });
  }

  const uuid = await services.createMeasurement(params);

  return res.status(201).json({ id: uuid });
}

async function deleteMeasurement(req, res, next) {
  return res.json({ message: 'not yet implemented' });
}

export default {
  getClients,
  createClient,
  getClient,
  updateClient,
  deleteClient,
  getMeasurements,
  createMeasurement,
  deleteMeasurement,
};
