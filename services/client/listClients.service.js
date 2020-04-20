import { Client } from '../../db';

export default async function listClients({ limit, offset } = {}) {
  try {
    return await Client.query({ limit, offset });
  } catch (err) {
    throw err;
  }
}
