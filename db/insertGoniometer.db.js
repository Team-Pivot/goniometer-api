import db from './db';

export default async function insertGoniometer({ name, clinic }) {
  const id = await db.getUUID();
  const clinicQ = ['', ''];
  if (clinic != null) {
    clinicQ[0] = ', clinic';
    clinicQ[1] = ', UUID_TO_BIN(?)';
  }
  console.log(clinic);
  const qstr = `
    INSERT INTO Goniometer (
      id,
      name${clinicQ[0]}
    ) VALUES (UUID_TO_BIN(?), ?${clinicQ[1]});`;
  console.log(qstr);
  try {
    const [result, fields] = await db.pool.promise().query(qstr, [id, name, clinic]);
    console.log(result);
    if (result.insertId != null) {
      return { id };
    }
    console.log(result);
    throw new Error('Insert failed for measurement');
  } catch (err) {
    console.error(err);
    throw err;
  }
}
