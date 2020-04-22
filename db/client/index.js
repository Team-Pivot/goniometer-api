import insertClient from './insertClient.db';
import getClientList from './getClientList.db';
import getClient from './getClient.db';
import updateClient from './updateClient.db';
import deleteClient from './deleteClient.db';

export default {
  insert: insertClient,
  query: getClientList,
  get: getClient,
  update: updateClient,
  remove: deleteClient,
};
