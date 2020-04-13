import { queryClinics } from '../db';

export default async function listClinics({ limit, offset } = {}) {
  try {
    const [results, fields] = await queryClinics({ limit, offset });
    return results;
  } catch (err) {
    throw err;
  }
}
