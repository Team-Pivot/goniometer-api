import { Measurement } from '../../db';

export default async function createMeasurement({
  angle, // required, should be a XXX.XX decimal
  endAngle = null, // not required, should be a XXX.XX decimal
  jointType, // required, should be valid foreign key
  measurementType, // required, should be valid foreign key
  client, // required, should be valid foreign key to a client
  clinic, // required, should be valid foreign key to a clinic
}) {
  return Measurement.insert({
    angle, // required, should be a XXX.XX decimal
    endAngle, // not required, should be a XXX.XX decimal
    jointType, // required, should be valid foreign key
    measurementType, // required, should be valid foreign key
    client, // required, should be valid foreign key to a client
    clinic,
  });
}
