import { Client } from '../../db';

export default async function listClients({ limit, offset } = {}) {
  return await Client.query({ limit, offset });
}
