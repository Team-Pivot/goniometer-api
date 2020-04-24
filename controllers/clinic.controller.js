import { validate, validations } from './validations';
import { Clinic, Goniometer } from '../services';

async function list(req, res, next) {
  const params = {
    limit: req.query.limit != null ? parseInt(req.query.limit) : 1000,
    offset: req.query.offset != null ? parseInt(req.query.offset) : 0,
  };
  try {
    validate(params, {
      limit: validations.int({ presence: false, bounds: [0] }),
      offset: validations.int({ presence: false, bounds: [0] }),
    });

    const clinics = await Clinic.list(params);
    return res.json(clinics);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  const params = {
    name: req.body.name,
    street: req.body.street,
    zipcode: req.body.zipcode,
    state: req.body.state,
  };
  try {
    validate(params, {
      name: validations.simpleName({ presence: true }),
      street: validations.street({ presence: true }),
      zipcode: validations.zipcode({ presence: true }),
      state: validations.state({ presence: true }),
    });
    const uuid = await Clinic.create(params);
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
    id: req.params.clinic,
    name: req.body.name,
    street: req.body.street,
    zipcode: req.body.zipcode,
    state: req.body.state,
  };

  try {
    validate(params, {
      id: validations.uuid(),
      name: validations.simpleName({ presence: true }),
      street: validations.street({ presence: true }),
      zipcode: validations.zipcode({ presence: true }),
      state: validations.state({ presence: true }),
    });
    await Clinic.update(params);
    return res.status(204).json({});
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  const params = {
    id: req.params.clinic,
  };
  try {
    validate(params, {
      id: validations.uuid(),
    });
    await Clinic.remove(params);
    return res.status(204).json({});
  } catch (err) {
    next(err);
  }
}

async function getGoniometers(req, res, next) {
  let { search } = req.query;
  if (search != null && typeof search === 'string' && search.trim().length === 0) {
    search = undefined; // '' or just whitespace should not search
  }
  const params = {
    clinic: req.params.clinic,
    search,
    limit: req.query.limit != null ? parseInt(req.query.limit) : 1000,
    offset: req.query.offset != null ? parseInt(req.query.offset) : 0,
  };
  try {
    validate(params, {
      clinic: validations.uuid(),
      search: { type: 'string', length: { maximum: 255 } },
      limit: validations.int({ presence: false, bounds: [0] }),
      offset: validations.int({ presence: false, bounds: [0] }),
    });
    const gonList = await Goniometer.list(params);
    return res.json(gonList);
  } catch (err) {
    next(err);
  }
}

async function registerGoniometer(req, res, next) {
  const params = {
    id: req.body.goniometer,
    clinic: req.params.clinic,
  };
  try {
    validate(params, {
      clinic: validations.uuid(),
      id: validations.uuid(),
    });
    await Goniometer.register(params);
    return res.status(204).json({});
  } catch (err) {
    next(err);
  }
}

async function updateGoniometer(req, res, next) {
  const params = {
    id: req.params.goniometer,
    clinic: req.params.clinic,
    name: req.body.name,
  };
  try {
    const errs = validate(params, {
      id: validations.uuid(),
      clinic: validations.uuid(),
      name: validations.simpleName(),
    });
    await Goniometer.update(params);
    return res.status(204).json({});
  } catch (err) {
    next(err);
  }
}

async function unregisterGoniometer(req, res, next) {
  const params = {
    id: req.params.goniometer,
    clinic: req.params.clinic,
  };
  try {
    validate(params, {
      clinic: validations.uuid(),
      id: validations.uuid(),
    });
    await Goniometer.unregister(params);
    return res.status(204).json({});
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
  getGoniometers,
  registerGoniometer,
  updateGoniometer,
  unregisterGoniometer,
};
