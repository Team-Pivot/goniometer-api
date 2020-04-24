import db from '../db';
import { Exception } from '../../utils';

export default async function getClientList({ id } = {}) {
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
    FROM Client
    WHERE id = UUID_TO_BIN(?);
    `;
  try {
    const [results, fields] = await db.pool.promise().query(qstr, [id]);
    if (results.length > 0) {
      return results[0];
    }
    throw new Exception('Failed to get client', 404);
  } catch (err) {
    throw err;
  }
}
