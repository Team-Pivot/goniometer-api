import listGoniometers from './listGoniometers.service';
import createGoniometer from './createGoniometer.service';
import updateGoniometer from './updateGoniometer.service';
import removeGoniometer from './removeGoniometer.service';

export default {
  list: listGoniometers,
  create: createGoniometer,
  update: updateGoniometer,
  remove: removeGoniometer,
};
