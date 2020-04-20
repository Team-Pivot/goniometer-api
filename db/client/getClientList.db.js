import db from '../db';

export default async function getClientList({ limit = 1000, offset = 0 } = {}) {
  const qstr = `
    SELECT
      BIN_TO_UUID(id) as id,
      first_name as firstName,
      last_name as lastName,
      birth_date as birthDate,
      ehr_link as ehrLink,
      BIN_TO_UUID(clinic) as clinic,
      created_at as createdAt,
      updated_at as updatedAt
    FROM Client LIMIT ? OFFSET ?;
    `;
  try {
    const [results, fields] = await db.pool.promise().query(qstr, [limit, offset]);
    return results;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
