import db from './db';

export default async function getClientList({ limit = 1000, offset = 0 } = {}) {
  console.log('LIMIT:', limit, '\nOFFSET:', offset);
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
    return await db.pool.promise().query(qstr, [limit, offset]);
  } catch (err) {
    console.err(err);
    throw err;
  }
}
