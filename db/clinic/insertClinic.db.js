import db from '../db';
import { Exception } from '../../utils';

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
    throw new Exception('Insert failed for measurement');
  } catch (err) {
    throw err;
  }
}
