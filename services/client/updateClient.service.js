import { Client } from '../../db';

export default async function updateClient({
  id,
  firstName,
  lastName,
  birthDate,
  ehrLink,
  clinic,
}) {
  try {
    await Client.update({
      id,
      firstName,
      lastName,
      birthDate: new Date(birthDate),
      ehrLink,
      clinic,
    });
  } catch (err) {
    throw err;
  }
}
