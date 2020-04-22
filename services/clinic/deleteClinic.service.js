import { Clinic } from '../../db';

export default async function deleteClinic({ id }) {
  try {
    await Clinic.remove({
      id,
    });
  } catch (err) {
    throw err;
  }
}
