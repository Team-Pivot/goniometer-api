import { validate, validations } from './validations';
import { Clinic, Goniometer } from '../services';

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

  const clinics = await Clinic.list(params);

  return res.json(clinics);
}

async function create(req, res, next) {
  return res.json({ message: 'not yet implemented' });
}

async function get(req, res, next) {
  return res.json({ message: 'not yet implemented' });
}

async function update(req, res, next) {
  return res.json({ message: 'not yet implemented' });
}

async function remove(req, res, next) {
  return res.json({ message: 'not yet implemented' });
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
  const errs = validate(params, {
    clinic: validations.uuid(),
    search: { type: 'string', length: { maximum: 255 } },
    limit: validations.int({ presence: false, bounds: [0] }),
    offset: validations.int({ presence: false, bounds: [0] }),
  });
  if (errs != null) {
    return res.status(400).json({
      errors: errs,
    });
  }
  const gonList = await Goniometer.list(params);
  return res.json(gonList);
}

async function createGoniometer(req, res, next) {
  return res.json({ message: 'not yet implemented' });
}
async function updateGoniometer(req, res, next) {
  return res.json({ message: 'not yet implemented' });
}
async function deleteGoniometer(req, res, next) {
  return res.json({ message: 'not yet implemented' });
}

export default {
  list,
  create,
  get,
  update,
  remove,
  getGoniometers,
  createGoniometer,
  updateGoniometer,
  deleteGoniometer,
};
