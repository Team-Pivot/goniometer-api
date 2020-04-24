import { Measurement } from '../../db';

export default async function queryMeasurements({
  client, dateRange, limit, offset, order,
}) {
  return Measurement.query({
    client,
    dateRange,
    limit,
    offset,
    order,
  });
}
