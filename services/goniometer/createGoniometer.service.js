import { Goniometer } from '../../db';

export default async function createGoniometer({ name, clinic }) {
  try {
    const id = await Goniometer.insert({
      name,
      clinic,
    });
    return id;
  } catch (err) {
    throw err;
  }
}
