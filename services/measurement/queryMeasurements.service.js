import { Measurement } from '../../db';

export default async function queryMeasurements({
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
