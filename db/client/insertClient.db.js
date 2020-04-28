import db from '../db';
import { Exception, SQLCodes } from '../../utils';

export default async function insertClient({
  firstName, lastName, birthDate, ehrLink, clinic,
}) {
  const id = await db.getUUID();
  const qstr = `
    INSERT INTO Client (
      id,
      first_name,
      last_name,
      birth_date,
      ehr_link,
      clinic
    ) VALUES (UUID_TO_BIN(?), ?, ?, ?, ?, UUID_TO_BIN(?));`;
  try {
    const [result, fields] = await db.pool
      .promise()
      .query(qstr, [id, firstName, lastName, birthDate, ehrLink, clinic]);
    if (result.insertId != null) {
      return id;
    }
    throw new Exception(500, 'Insert failed for measurement');
  } catch (err) {
    throw err;
  }
}
