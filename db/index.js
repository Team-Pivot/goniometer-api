import insertMeasurement from './insertMeasurement.db';
import getClientList from './getClientList.db';
import queryMeasurements from './queryMeasurements.db';
import queryGoniometers from './queryGoniometers.db';
import queryClinics from './queryClinics.db';
import insertClient from './insertClient.db';
import insertGoniometer from './insertGoniometer.db';
import deleteGoniometer from './deleteGoniometer.db';
import updateGoniometer from './updateGoniometer.db';

export {
  insertMeasurement,
  getClientList,
  queryClinics,
  queryMeasurements,
  insertClient,
  queryGoniometers,
  insertGoniometer,
  deleteGoniometer,
  updateGoniometer,
};

export const goniometer = {
  query: queryGoniometers,
  insert: insertGoniometer,
  delete: deleteGoniometer,
  update: updateGoniometer,
};
