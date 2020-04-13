import { queryMeasurements } from '../db';

export default async function getMeasurements({
  client, dateRange, limit, offset, order,
}) {
  try {
    return await queryMeasurements({
      client,
      dateRange,
      limit,
      offset,
      order,
    });
  } catch (err) {
    throw err;
  }
}
