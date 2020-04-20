import createClient from './createClient.service';
import getClient from './getClient.service';
import listClients from './listClients.service';

export default {
  create: createClient,
  get: getClient,
  list: listClients,
};
