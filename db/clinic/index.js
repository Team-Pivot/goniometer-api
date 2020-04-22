import queryClinics from './queryClinics.db';
import insertClinic from './insertClinic.db';
import updateClinic from './updateClinic.db';
import deleteClinic from './deleteClinic.db';

export default {
  query: queryClinics,
  insert: insertClinic,
  update: updateClinic,
  remove: deleteClinic,
};
