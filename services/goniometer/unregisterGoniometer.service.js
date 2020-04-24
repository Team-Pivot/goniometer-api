import { Goniometer } from '../../db';
import { Exception } from '../../utils';

export default async function unregisterGoniometer({ id, clinic } = {}) {
  const goniometers = await Goniometer.query({ id, clinic });
  if (goniometers.length < 1) {
    throw new Exception('Goniometer not found');
  }
  const goniometer = goniometers[0];
  await Goniometer.update({ ...goniometer, clinic: null });
}
