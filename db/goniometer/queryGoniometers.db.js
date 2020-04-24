import db from '../db';
import { Exception, SQLCodes } from '../../utils';

export default async function queryGoniometers({
  id,
  search,
  clinic,
  limit = 1000,
  offset = 0,
} = {}) {
  const wheres = [];

  if (id != null) {
    wheres.push(`id = UUID_TO_BIN(${db.escape(id)})`);
  }

  if (search != null) {
    wheres.push(`name LIKE ${db.escape(search)}`);
  }
  if (clinic != null) {
    wheres.push(`clinic = UUID_TO_BIN(${db.escape(clinic)})`);
  }
  const whereClause = wheres.length > 0 ? `WHERE ${wheres.join(' AND ')}` : '';

  const qstr = `
    SELECT
      BIN_TO_UUID(id) as id,
      name,
      BIN_TO_UUID(clinic) as clinic,
      last_used as lastUsed,
      created_at as createdAt,
      updated_at as updatedAt
    FROM Goniometer
    ${whereClause}
    LIMIT ? OFFSET ?
  `;

  try {
    const [results, fields] = await db.pool.promise().query(qstr, [limit, offset]);
    return results;
  } catch (err) {
    throw err;
  }
}
