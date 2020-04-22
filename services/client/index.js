import createClient from './createClient.service';
import getClient from './getClient.service';
import deleteClient from './deleteClient.service';
import listClients from './listClients.service';
import updateClient from './updateClient.service';

export default {
  create: createClient,
  get: getClient,
  list: listClients,
  update: updateClient,
  remove: deleteClient,
};
