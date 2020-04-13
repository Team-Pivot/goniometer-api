import mysql from 'mysql2';
import config from '../.config';

console.log('ENV:', process.env.NODE_ENV);
const connectionConf = process.env.NODE_ENV !== 'test' ? config.db.dev : config.db.test;
const pool = mysql.createPool({
  ...connectionConf,
});

export default {
  pool,
  escape(s) {
    return pool.escape(s);
  },
  async getUUID() {
    const [row] = await pool.promise().query('SELECT UUID() as uuid');
    return row[0].uuid;
  },
};
