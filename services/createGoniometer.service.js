import { insertGoniometer } from '../db';

export default async function createGoniometer({ name, clinic }) {
  try {
    const { id } = await insertGoniometer({
      name,
      clinic,
    });
    return id;
  } catch (err) {
    throw err;
  }
}
