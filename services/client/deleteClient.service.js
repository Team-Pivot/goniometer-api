import { Client } from '../../db';

export default async function deleteClient({ id } = {}) {
  try {
    return await Client.remove({ id });
  } catch (err) {
    throw err;
  }
}
