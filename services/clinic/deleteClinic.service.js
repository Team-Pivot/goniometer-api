import { Clinic } from '../../db';

export default async function deleteClinic({ id }) {
  await Clinic.remove({ id });
}
