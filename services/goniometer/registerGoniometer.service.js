import { Goniometer } from '../../db';
import { Exception } from '../../utils';

export default async function registerGoniometer({ id, clinic } = {}) {
  const goniometers = await Goniometer.query({ id });
  if (goniometers.length < 1) {
    throw new Exception('Goniometer not found', 404);
  }
  const goniometer = goniometers[0];
  if (goniometer.clinic != null) {
    throw new Exception('Goniometer already registered', 409);
  }
  await Goniometer.update({ ...goniometer, clinic });
}
