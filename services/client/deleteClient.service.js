import { Client } from '../../db';

export default async function deleteClient({ id } = {}) {
  return Client.remove({ id });
}
