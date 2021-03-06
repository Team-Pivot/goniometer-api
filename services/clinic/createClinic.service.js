import { Clinic } from '../../db';

export default async function createClinic({
  name, street, zipcode, state,
}) {
  const id = await Clinic.insert({
    name,
    street,
    zipcode,
    state,
  });
  return id;
}
