import { Clinic } from '../../db';

export default async function listClinics({ limit, offset } = {}) {
  try {
    return Clinic.query({ limit, offset });
  } catch (err) {
    throw err;
  }
}
