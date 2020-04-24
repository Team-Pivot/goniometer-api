import { Clinic } from '../../db';

export default async function listClinics({ limit, offset } = {}) {
  return Clinic.query({ limit, offset });
}
