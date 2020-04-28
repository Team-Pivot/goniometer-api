import db from '../db';
import { Exception } from '../../utils';

export default async function updateClient({
  id,
  firstName,
  lastName,
  birthDate,
  ehrLink,
  clinic,
}) {
  const qstr = `
    UPDATE Client
    SET
      first_name = ?,
      last_name = ?,
      birth_date = ?,
      ehr_link = ?,
      clinic = UUID_TO_BIN(?)
    WHERE
      id = UUID_TO_BIN(?);`;
  try {
    const [result, fields] = await db.pool
      .promise()
      .query(qstr, [firstName, lastName, birthDate, ehrLink, clinic, id]);
    if (result.affectedRows > 0) {
      return result;
    }
    throw new Exception(500, 'Update failed for client');
  } catch (err) {
    throw err;
  }
}
