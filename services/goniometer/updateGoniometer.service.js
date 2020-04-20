import { Goniometer } from '../../db';

export default async function updateGoniometer({ id, name, clinic }) {
  try {
    await Goniometer.update({
      id,
      name,
      clinic,
    });
    return;
  } catch (err) {
    throw err;
  }
}
