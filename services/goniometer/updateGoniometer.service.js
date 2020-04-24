import { Goniometer } from '../../db';

export default async function updateGoniometer({ id, name, clinic }) {
  await Goniometer.update({
    id,
    name,
    clinic,
  });
}
