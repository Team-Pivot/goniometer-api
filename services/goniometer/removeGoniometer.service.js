import { Goniometer } from '../../db';

export default async function removeGoniometer({ id } = {}) {
  return Goniometer.delete({ id });
}
