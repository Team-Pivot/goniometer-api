import { Client } from '../../db';

export default async function getClient({ id } = {}) {
  try {
    return await Client.get({ id });
  } catch (err) {
    throw err;
  }
}
