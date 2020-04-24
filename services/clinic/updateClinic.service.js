import { Clinic } from '../../db';

export default async function createClinic({
  id, name, street, zipcode, state,
}) {
  await Clinic.update({
    id,
    name,
    street,
    zipcode,
    state,
  });
}
