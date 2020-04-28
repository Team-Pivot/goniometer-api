import { Goniometer } from '../../db';
import { Exception } from '../../utils';

export default async function registerGoniometer({ id, clinic } = {}) {
  const goniometers = await Goniometer.query({ id });
  if (goniometers.length < 1) {
    throw new Exception(404, 'Goniometer not found');
  }
  const goniometer = goniometers[0];
  if (goniometer.clinic != null) {
    throw new Exception(409, 'Goniometer already registered');
  }
  await Goniometer.update({ ...goniometer, clinic });
}
