import { Goniometer } from '../../db';

export default async function unregisterGoniometer({ id, clinic } = {}) {
  try {
    const goniometers = await Goniometer.query({ id, clinic });
    console.log(goniometers, id);
    if (goniometers.length < 1) {
      throw new Error('Goniometer not found');
    }
    const goniometer = goniometers[0];
    await Goniometer.update({ ...goniometer, clinic: null });
  } catch (err) {
    throw err;
  }
}
