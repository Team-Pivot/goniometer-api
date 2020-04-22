import db from '../db';

export default async function insertClient({
  name, street, zipcode, state,
}) {
  const id = await db.getUUID();
  const qstr = `
    INSERT INTO Clinic (
      id,
      name,
      street,
      zipcode,
      state
    ) VALUES (UUID_TO_BIN(?), ?, ?, ?, ?);`;
  try {
    const [result, fields] = await db.pool
      .promise()
      .query(qstr, [id, name, street, zipcode, state]);
    if (result.insertId != null) {
      return id;
    }
    throw new Error('Insert failed for measurement');
  } catch (err) {
    console.error(err);
    throw err;
  }
}
