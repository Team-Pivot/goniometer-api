import { Goniometer } from '../../db';

export default async function registerGoniometer({ id, clinic } = {}) {
  try {
    const goniometers = await Goniometer.query({ id });
    console.log(goniometers, id);
    if (goniometers.length < 1) {
      throw new Error('Goniometer not found');
    }
    const goniometer = goniometers[0];
    if (goniometer.clinic != null) {
      throw new Error('Goniometer already registered');
    }
    await Goniometer.update({ ...goniometer, clinic });
  } catch (err) {
    throw err;
  }
}
