import db from '../db';
import { Exception, SQLCodes } from '../../utils';

export default async function deleteClient({ id } = {}) {
  const qstr = `
    DELETE
    FROM Client
    WHERE id = UUID_TO_BIN(?);
    `;
  try {
    const [results, fields] = await db.pool.promise().query(qstr, [id]);
    if (results.affectedRows > 0) {
      return results;
    }
    if (SQLCodes.isFkError(err)) {
      throw new Exception(404, 'Client by given id not found');
    }
    throw new Exception(500, 'Failed to delete client');
  } catch (err) {
    throw err;
  }
}
