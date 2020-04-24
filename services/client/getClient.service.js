import { Client } from '../../db';

export default async function getClient({ id } = {}) {
  return await Client.get({ id });
}
