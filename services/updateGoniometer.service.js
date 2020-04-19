import { goniometer } from '../db';

export default async function updateGoniometer({ id, name, clinic }) {
  try {
    await goniometer.update({
      id,
      name,
      clinic,
    });
    return;
  } catch (err) {
    throw err;
  }
}
