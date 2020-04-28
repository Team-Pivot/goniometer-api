import db from '../db';
import { Exception } from '../../utils';

export default async function updateClient({
  id, name, street, zipcode, state,
}) {
  const qstr = `
    UPDATE Clinic
    SET
      name = ?,
      street = ?,
      zipcode = ?,
      state = ?
    WHERE
      id = UUID_TO_BIN(?);`;
  try {
    const [result, fields] = await db.pool
      .promise()
      .query(qstr, [name, street, zipcode, state, id]);
    if (result.affectedRows > 0) {
      return result;
    }
    throw new Exception(500, 'Update failed for clinic');
  } catch (err) {
    throw err;
  }
}
