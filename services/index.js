import createMeasurement from './createMeasurement.service';
import createClient from './createClient.service';
import getMeasurements from './getMeasurements.service';
import listClients from './listClients.service';
import listClinics from './listClinics.service';

export { createMeasurement, listClients };
export default {
  createMeasurement,
  getMeasurements,
  listClients,
  listClinics,
  createClient,
};
