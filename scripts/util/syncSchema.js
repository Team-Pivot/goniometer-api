const fs = require('fs');

module.exports.toMultipleDatabases = async function (
  pool,
  databasesToSync,
  schemaPath,
  { uploaded = (dbName) => console.log('Successfully uploaded schema to', dbName) } = {},
) {
  // get the schema.sql commands
  console.log('Syncing schemas');
  try {
    const data = fs.readFileSync(schemaPath || `${process.cwd()}/db/schema.sql`, 'utf8');
    const syncPromises = databasesToSync.map(async (dbName) => {
      const conn = await pool.getConnection();
      await conn.query(`USE ${dbName}`);
      await conn.query(data).then(() => uploaded(dbName));
    });

    return Promise.all(syncPromises);
  } catch (e) {
    console.log(e);
    throw e;
  }
};
