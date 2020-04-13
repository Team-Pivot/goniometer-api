import validate from 'validate.js';
import validations from './validations';
import services from '../services';

async function getClinics(req, res, next) {
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

  const clinics = await services.listClinics(params);

  return res.json(clinics);
}

async function createClinic(req, res, next) {
  return res.json({ message: 'not yet implemented' });
}

async function getClinic(req, res, next) {
  return res.json({ message: 'not yet implemented' });
}

async function updateClinic(req, res, next) {
  return res.json({ message: 'not yet implemented' });
}

async function deleteClinic(req, res, next) {
  return res.json({ message: 'not yet implemented' });
}

export default {
  getClinics,
  createClinic,
  getClinic,
  updateClinic,
  deleteClinic,
};
