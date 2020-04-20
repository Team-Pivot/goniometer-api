import { Goniometer } from '../../db';

export default async function removeGoniometer({ id } = {}) {
  try {
    return await Goniometer.delete({ id });
  } catch (err) {
    throw err;
  }
}
