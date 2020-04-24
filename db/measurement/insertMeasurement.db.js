import db from '../db';
import { Exception, SQLCodes } from '../../utils';

export default async function insertMeasurement({
  angle, // required, should be a XXX.XX decimal
  endAngle, // not required, should be a XXX.XX decimal
  jointType, // required, should be valid foreign key
  measurementType, // required, should be valid foreign key
  client, // required, should be valid foreign key to a client
  clinic, // required, should be valid foreign key to a clinic
}) {
  const id = await db.getUUID();
  const qstr = `
    INSERT INTO Measurement (
      id,
      angle,
      end_angle,
      joint_type,
      measurement_type,
      client,
      clinic
    ) VALUES (UUID_TO_BIN(?), ?, ?, ?, ?, UUID_TO_BIN(?), UUID_TO_BIN(?));`;
  try {
    const [result, fields] = await db.pool
      .promise()
      .query(qstr, [id, angle, endAngle, jointType, measurementType, client, clinic]);
    if (result.insertId != null) {
      return id;
    }
    throw new Exception('Insert failed for measurement');
  } catch (err) {
    throw err;
  }
}
