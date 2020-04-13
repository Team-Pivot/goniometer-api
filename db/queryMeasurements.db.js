import db from './db';

export default async function queryMeasurements({
  client,
  dateRange,
  limit,
  offset,
  order = ['created_at'],
}) {
  const wheres = [];
  if (client != null) {
    wheres.push(`client = UUID_TO_BIN(${db.escape(client)})`);
  }
  if (dateRange != null) {
    if (dateRange[0] != null) {
      wheres.push(`created_at >= DATE(${db.escape(dateRange[0])})`);
    }
    if (dateRange[1] != null) {
      wheres.push(`created_at <= DATE(${db.escape(dateRange[1])})`);
    }
  }

  const whereClause = wheres.length > 0 ? `WHERE ${wheres.join(' AND ')}` : '';

  const qstr = `
    SELECT
      BIN_TO_UUID(id) as id,
      angle,
      end_angle as endAngle,
      joint_type as jointType,
      measurement_type as measurementType,
      BIN_TO_UUID(client) as client,
      BIN_TO_UUID(clinic) as clinic,
      created_at as createdAt,
      updated_at as updatedAt
    FROM Measurement
    ${whereClause}
    LIMIT ? OFFSET ?
  `;
  try {
    const [result, fields] = await db.pool.promise().query(qstr, [limit, offset]);
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
