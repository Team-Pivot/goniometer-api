import { Goniometer } from '../../db';

export default async function listGoniometers({
  clinic, query, limit, offset,
} = {}) {
  try {
    return await Goniometer.query({
      clinic,
      query,
      limit,
      offset,
    });
  } catch (err) {
    throw err;
  }
}
