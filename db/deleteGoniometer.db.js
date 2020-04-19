import db from './db';

export default async function deleteGoniometer({ id } = {}) {
  const qstr = `
    DELETE
    FROM Goniometer
    WHERE id = UUID_TO_BIN(?)
  `;

  try {
    const [results] = db.pool.promise().query(qstr, [id]);
    if (results.affectedRows < 1) {
      throw new Error('Delete Failed');
    }
    return results;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
