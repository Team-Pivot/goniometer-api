import { getClientList } from '../db';

export default async function listClients({ limit, offset } = {}) {
  try {
    const [results, fields] = await getClientList({ limit, offset });
    return results;
  } catch (err) {
    throw err;
  }
}
