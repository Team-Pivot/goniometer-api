import db from '../db';
import { Exception } from '../../utils';

export default async function deleteGoniometer({ id } = {}) {
  const qstr = `
    DELETE
    FROM Goniometer
    WHERE id = UUID_TO_BIN(?)
  `;

  try {
    const [results] = await db.pool.promise().query(qstr, [id]);
    if (results.affectedRows < 1) {
      throw new Exception(404, 'Failed to delete goniometer. Uuid is likely invalid');
    }
    return results;
  } catch (err) {
    throw err;
  }
}
