import { deleteGoniometer } from '../db';

export default async function removeGoniometer({ id } = {}) {
  try {
    const results = await deleteGoniometer({ id });
    return results;
  } catch (err) {
    throw err;
  }
}
