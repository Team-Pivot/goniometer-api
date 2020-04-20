import insertClient from './insertClient.db';
import getClientList from './getClientList.db';
import getClient from './getClient.db';

export default {
  insert: insertClient,
  query: getClientList,
  get: getClient,
};
