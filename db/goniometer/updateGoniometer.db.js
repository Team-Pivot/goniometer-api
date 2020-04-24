import db from '../db';
import { Exception, SQLCodes } from '../../utils';

export default async function updateGoniometer({ id, name, clinic }) {
  const qstr = `
    UPDATE Goniometer
    SET
      name = ?,
      clinic = UUID_TO_BIN(?)
    WHERE
      id = UUID_TO_BIN(?);`;
  try {
    const [result, fields] = await db.pool.promise().query(qstr, [name, clinic, id]);
    if (result.affectedRows > 0) {
      return result;
    }
    throw new Exception(500, 'Update failed for goniometer');
  } catch (err) {
    if (SQLCodes.isFkError(err)) {
      throw new Exception(404, 'Clinic not found');
    }
    throw err;
  }
}
