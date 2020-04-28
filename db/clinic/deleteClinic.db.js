import db from '../db';
import { Exception } from '../../utils';

export default async function updateClient({ id }) {
  const qstr = `
    DELETE FROM Clinic
    WHERE
      id = UUID_TO_BIN(?);`;
  try {
    const [result, fields] = await db.pool.promise().query(qstr, [id]);
    if (result.affectedRows > 0) {
      return result;
    }
    throw new Exception(500, 'Delete failed for clinic');
  } catch (err) {
    throw err;
  }
}
