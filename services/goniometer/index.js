import listGoniometers from './listGoniometers.service';
import createGoniometer from './createGoniometer.service';
import updateGoniometer from './updateGoniometer.service';
import removeGoniometer from './removeGoniometer.service';
import registerGoniometer from './registerGoniometer.service';
import unregisterGoniometer from './unregisterGoniometer.service';

export default {
  list: listGoniometers,
  create: createGoniometer,
  update: updateGoniometer,
  remove: removeGoniometer,
  register: registerGoniometer,
  unregister: unregisterGoniometer,
};
