import db from '../db';

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
    throw new Error('Update failed for goniometer');
  } catch (err) {
    console.error(err);
    throw err;
  }
}