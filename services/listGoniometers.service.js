import { queryGoniometers } from '../db';

export default async function listGoniometers({
  clinic, query, limit, offset,
} = {}) {
  try {
    const [results, fields] = await queryGoniometers({
      clinic,
      query,
      limit,
      offset,
    });
    return results;
  } catch (err) {
    throw err;
  }
}
