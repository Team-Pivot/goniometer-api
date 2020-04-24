import { validate, validations } from './validations';
import { Goniometer } from '../services';

async function list(req, res, next) {
  const params = {
    limit: req.query.limit != null ? parseInt(req.query.limit) : 1000,
    offset: req.query.offset != null ? parseInt(req.query.offset) : 0,
  };
  const errs = validate(params, {
    limit: validations.int({ presence: false, bounds: [0] }),
    offset: validations.int({ presence: false, bounds: [0] }),
  });
  if (errs != null) {
    return res.status(400).json({
      errors: errs,
    });
  }

  const goniometers = await Goniometer.list(params);

  return res.json(goniometers);
}

async function create(req, res, next) {
  const params = {
    clinic: req.body.clinic,
    name: req.body.name,
  };
  try {
    validate(params, {
      clinic: validations.uuid({ presence: false }),
      name: validations.simpleName({ presence: true }),
    });
    const uuid = await Goniometer.create(params);
    return res.status(201).json({ id: uuid });
  } catch (err) {
    next(err);
  }
}

async function get(req, res, next) {
  return res.status(501).json({ message: 'not yet implemented' });
}

async function update(req, res, next) {
  const params = {
    id: req.params.goniometer,
    clinic: req.body.clinic,
    name: req.body.name,
  };
  try {
    validate(params, {
      id: validations.uuid(),
      clinic: validations.uuid({ presence: false }),
      name: validations.simpleName(),
    });
    const uuid = await Goniometer.update(params);
    return res.status(204).json();
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  const params = {
    id: req.params.goniometer,
  };
  try {
    validate(params, {
      id: validations.uuid(),
    });
    const uuid = await Goniometer.remove(params);
    return res.status(204).json();
  } catch (err) {
    next(err);
  }
}

export default {
  list,
  create,
  get,
  update,
  remove,
};
