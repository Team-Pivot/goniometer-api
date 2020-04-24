import { validate, validations } from './validations';
import { Client, Measurement } from '../services';

async function list(req, res, next) {
  try {
    const clientList = await Client.list();
    return res.json(clientList);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  const params = {
    firstName: req.body.firstName, // a string
    lastName: req.body.lastName, // a string
    birthDate: req.body.birthDate, // in form MM/DD/YYYY or MM-DD-YYYY
    ehrLink: req.body.ehrLink, // a url
    clinic: req.body.clinic, // a string uuid
  };
  try {
    validate(params, {
      firstName: { presence: true, type: 'string' },
      lastName: { presence: true, type: 'string' },
      birthDate: validations.dateString(),
      clinic: validations.uuid(),
    });
    const uuid = await Client.create(params);
    return res.status(201).json({ id: uuid });
  } catch (err) {
    next(err);
  }
}

async function get(req, res, next) {
  const params = {
    id: req.params.client,
  };
  try {
    validate(params, {
      id: validations.uuid(),
    });
    const client = await Client.get(params);
    return res.json(client);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  const params = {
    id: req.params.client,
    firstName: req.body.firstName, // a string
    lastName: req.body.lastName, // a string
    birthDate: req.body.birthDate, // in form MM/DD/YYYY or MM-DD-YYYY
    ehrLink: req.body.ehrLink, // a url
    clinic: req.body.clinic, // a string uuid
  };

  try {
    validate(params, {
      id: validations.uuid(),
      firstName: { presence: true, type: 'string' },
      lastName: { presence: true, type: 'string' },
      birthDate: validations.dateString(),
      ehrLink: { type: 'string' },
      clinic: validations.uuid(),
    });
    await Client.update(params);
    return res.status(204).json();
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  const params = {
    id: req.params.client,
  };
  try {
    validate(params, { id: validations.uuid() });
    await Client.remove(params);
    return res.status(204).json({});
  } catch (err) {
    next(err);
  }
}

async function getMeasurements(req, res, next) {
  const params = {
    client: req.params.client,
    dateRange: req.query.dateRange,
    limit: req.query.limit != null ? parseFloat(req.query.limit) : 1000,
    offset: req.query.offset != null ? parseFloat(req.query.offset) : 0,
    order: req.query.order,
  };
  try {
    validate(params, {
      client: validations.uuid(),
      dateRange: { type: 'array', length: { maximum: 2 } },
      'dateRange.0': validations.isoTime({ presence: false }),
      'dateRange.1': validations.isoTime({ presence: false }),
      limit: validations.int({ bounds: [0] }),
      offset: validations.int({ bounds: [0] }),
      order: { type: 'array' },
    });
    const measurements = await Measurement.query(params);
    return res.json(measurements);
  } catch (err) {
    next(err);
  }
}

async function createMeasurement(req, res, next) {
  const params = {
    angle: parseFloat(req.body.angle), // required, should be a XXX.XX decimal
    endAngle: req.body.endAngle != null ? parseFloat(req.body.endAngle) : undefined, // not required, should be a XXX.XX decimal
    jointType: req.body.jointType, // expect a string name that is only alphanumeric, hyphens, or apostrophes
    measurementType: req.body.measurementType, // expect a string name that is only alphanumeric, hyphens, or apostrophes
    client: req.params.client, // expect a string UUID
    clinic: req.body.clinic, // expect a string UUID
  };
  try {
    validate(params, {
      angle: validations.angle(),
      endAngle: validations.angle({ presence: false }),
      jointType: validations.measurementTypes(),
      measurementType: validations.measurementTypes(),
      clinic: validations.uuid(),
      client: validations.uuid(),
    });
    const uuid = await Measurement.create(params);
    return res.status(201).json({ id: uuid });
  } catch (err) {
    next(err);
  }
}

async function deleteMeasurement(req, res, next) {
  return res.status(501).json({ message: 'not yet implemented' });
}

export default {
  list,
  create,
  get,
  update,
  remove,
  getMeasurements,
  createMeasurement,
  deleteMeasurement,
};
