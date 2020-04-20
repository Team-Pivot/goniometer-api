import queryGoniometers from './queryGoniometers.db';
import insertGoniometer from './insertGoniometer.db';
import deleteGoniometer from './deleteGoniometer.db';
import updateGoniometer from './updateGoniometer.db';

export default {
  query: queryGoniometers,
  insert: insertGoniometer,
  delete: deleteGoniometer,
  update: updateGoniometer,
};
