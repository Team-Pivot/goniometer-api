import listClinics from './listClinics.service';
import createClinic from './createClinic.service';
import updateClinic from './updateClinic.service';
import deleteClinic from './deleteClinic.service';

export default {
  list: listClinics,
  create: createClinic,
  update: updateClinic,
  remove: deleteClinic,
};
