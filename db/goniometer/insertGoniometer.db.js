import db from '../db';
import { Exception } from '../../utils';

export default async function insertGoniometer({ name, clinic }) {
  const id = await db.getUUID();
  const clinicQ = ['', ''];
  if (clinic != null) {
    clinicQ[0] = ', clinic';
    clinicQ[1] = ', UUID_TO_BIN(?)';
  }
  const qstr = `
    INSERT INTO Goniometer (
      id,
      name${clinicQ[0]}
    ) VALUES (UUID_TO_BIN(?), ?${clinicQ[1]});`;
  try {
    const [result, fields] = await db.pool.promise().query(qstr, [id, name, clinic]);
    if (result.insertId != null) {
      return id;
    }
    throw new Exception(500, 'Insert failed for measurement');
  } catch (err) {
    if (SQLCodes.isFkError(err)) {
      throw new Exception(404, 'Clinic not found');
    }
    throw err;
  }
}
