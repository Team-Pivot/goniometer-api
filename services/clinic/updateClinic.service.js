import { Clinic } from '../../db';

export default async function createClinic({
  id, name, street, zipcode, state,
}) {
  try {
    await Clinic.update({
      id,
      name,
      street,
      zipcode,
      state,
    });
  } catch (err) {
    throw err;
  }
}
