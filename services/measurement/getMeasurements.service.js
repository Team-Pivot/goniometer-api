import { Measurement } from '../../db';

export default async function getMeasurements({
  client, dateRange, limit, offset, order,
}) {
  try {
    return await Measurement.query({
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
