import db from '../db';

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
    throw new Error('Failed to delete client');
  } catch (err) {
    console.error(err);
    throw err;
  }
}
