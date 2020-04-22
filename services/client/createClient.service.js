import { Client } from '../../db';

export default async function createClient({
  firstName, lastName, birthDate, ehrLink, clinic,
}) {
  try {
    const id = await Client.insert({
      firstName,
      lastName,
      birthDate: new Date(birthDate),
      ehrLink,
      clinic,
    });
    return id;
  } catch (err) {
    throw err;
  }
}