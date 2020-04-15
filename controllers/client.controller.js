import { validate, validations } from './validations';
import services from '../services';

async function getClients(req, res, next) {
  const clientList = await services.listClients();
  return res.json(clientList);
}

async function createClient(req, res, next) {
  const params = {
    firstName: req.body.firstName, // a string
    lastName: req.body.firstName, // a string
    birthDate: req.body.birthDate, // in form MM/DD/YYYY or MM-DD-YYYY
    ehrLink: req.body.ehrLink, // a url
    clinic: req.body.clinic, // a string uuid
  };
  const errs = validate(params, {
    firstName: { presence: true, type: 'string' },
    lastName: { presence: true, type: 'string' },
    birthDate: validations.dateString(),
    clinic: validations.uuid(),
  });

  if (errs != null) {
    return res.status(400).json({
      errors: errs,
    });
  }
  const uuid = await services.createClient(params);
  res.status(201).json({ id: uuid });
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
  const params = {
    client: req.params.clientId,
    dateRange: req.query.dateRange,
    limit: req.query.limit != null ? parseFloat(req.query.limit) : 1000,
    offset: req.query.offset != null ? parseFloat(req.query.offset) : 0,
    order: req.query.order,
  };
  const errs = validate(params, {
    client: validations.uuid(),
    dateRange: { type: 'array', length: { maximum: 2 } },
    'dateRange.0': validations.isoTime({ presence: false }),
    'dateRange.1': validations.isoTime({ presence: false }),
    limit: validations.int({ bounds: [0] }),
    offset: validations.int({ bounds: [0] }),
    order: { type: 'array' },
  });

  if (errs) {
    return res.status(400).json({
      errors: errs,
    });
  }

  const measurements = await services.getMeasurements(params);
  return res.json(measurements);
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
