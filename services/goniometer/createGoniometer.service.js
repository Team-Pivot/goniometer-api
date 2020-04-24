import { Goniometer } from '../../db';

export default async function createGoniometer({ name, clinic }) {
  const id = await Goniometer.insert({
    name,
    clinic,
  });
  return id;
}
