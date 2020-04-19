import createMeasurement from './createMeasurement.service';
import createClient from './createClient.service';
import getMeasurements from './getMeasurements.service';
import listClients from './listClients.service';
import listClinics from './listClinics.service';
import listGoniometers from './listGoniometers.service';
import createGoniometer from './createGoniometer.service';
import updateGoniometer from './updateGoniometer.service';
import removeGoniometer from './removeGoniometer.service';

export {
  createClient,
  createMeasurement,
  createGoniometer,
  getMeasurements,
  listClients,
  listClinics,
  listGoniometers,
  removeGoniometer,
  updateGoniometer,
};
export default {
  createClient,
  createGoniometer,
  createMeasurement,
  getMeasurements,
  listClients,
  listClinics,
  listGoniometers,
  removeGoniometer,
  updateGoniometer,
};
