import { Goniometer } from '../../db';

export default async function listGoniometers({
  clinic, query, limit, offset,
} = {}) {
  return Goniometer.query({
    clinic,
    query,
    limit,
    offset,
  });
}
