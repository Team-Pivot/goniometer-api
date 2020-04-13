import db from './db';

export default async function queryClinics({ limit = 1000, offset = 0 } = {}) {
  const qstr = `
    SELECT
      BIN_TO_UUID(id) as id,
      name,
      street,
      zipcode,
      state,
      created_at as createdAt,
      updated_at as updatedAt
    FROM Clinic
    LIMIT ? OFFSET ?
  `;

  try {
    return db.pool.promise().query(qstr, [limit, offset]);
  } catch (err) {
    console.error(err);
    throw err;
  }
}
