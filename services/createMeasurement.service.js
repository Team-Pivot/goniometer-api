import { insertMeasurement } from '../db';

export default async function createMeasurement({
  angle, // required, should be a XXX.XX decimal
  endAngle = null, // not required, should be a XXX.XX decimal
  jointType, // required, should be valid foreign key
  measurementType, // required, should be valid foreign key
  client, // required, should be valid foreign key to a client
  clinic, // required, should be valid foreign key to a clinic
}) {
  try {
    const { id } = await insertMeasurement({
      angle, // required, should be a XXX.XX decimal
      endAngle, // not required, should be a XXX.XX decimal
      jointType, // required, should be valid foreign key
      measurementType, // required, should be valid foreign key
      client, // required, should be valid foreign key to a client
      clinic,
    });
    return id;
  } catch (err) {
    throw err;
  }
}
