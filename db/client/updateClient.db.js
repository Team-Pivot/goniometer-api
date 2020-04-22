import db from '../db';

export default async function updateClient({
  id,
  firstName,
  lastName,
  birthDate,
  ehrLink,
  clinic,
}) {
  const qstr = `
    UPDATE Client
    SET
      first_name = ?,
      last_name = ?,
      birth_date = ?,
      ehr_link = ?,
      clinic = UUID_TO_BIN(?)
    WHERE
      id = UUID_TO_BIN(?);`;
  try {
    const [result, fields] = await db.pool
      .promise()
      .query(qstr, [firstName, lastName, birthDate, ehrLink, clinic, id]);
    if (result.affectedRows > 0) {
      return result;
    }
    throw new Error('Update failed for client');
  } catch (err) {
    console.error(err);
    throw err;
  }
}
