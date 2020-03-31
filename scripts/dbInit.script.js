const mysql = require('mysql2/promise');
const validate = require('validate.js');
const { exec } = require('child_process');
const { prompts, syncSchema } = require('./util');

const DATABASES = ['pivot_api', 'pivot_api_test'];

function getUniqueDbsFromEnvs(envConfigs) {
  return Object.entries(envConfigs)
    .filter(([env, envConf]) => !!envConf && (envConf.host === 'localhost' || envConf.host === '%'))
    .reduce((uniqueDbs, [env, { database }]) => {
      if (uniqueDbs[database]) {
        return uniqueDbs;
      }
      return { ...uniqueDbs, [database]: env };
    }, {});
}

function fail(errors) {
  let message;
  if (validate.isArray(errors)) {
    message = errors.join('\n');
  } else {
    message = errors;
  }
  console.log('----------- Error(s) -----------');
  console.error(message);
  console.log('------------------------------');
  console.log('Script failed. See above for details');
}

// 1 user could be used for multiple dbs
// Grants for that user could just be different depending on the db
// multiple users can't be added to one db, that's out of scope
// so, I add the dbs first, then add whatever users are needed
// then set the user permissions for test

/*
 * Initializes the databases specified by the .config.js file
 */
async function initialize() {
  console.log('Pivot database setup helper initiated\n');
  // get the user's db username
  console.log(
    'Please enter the username and password for the existing MySQL account '
      + 'which will create these tables and run initializations.',
  );
  const mysqlAdmin = await prompts.getAuth();

  // connect to the dbms
  let db;
  try {
    db = await mysql.createPool({
      host: 'localhost',
      user: mysqlAdmin.user,
      password: mysqlAdmin.password,
    });
  } catch (err) {
    return fail('Failed to connect to MySQL. Check your account credentials again.');
  }
  console.log("Creating 'pivot_api' and 'pivot_api_test' databases");
  const created = [];
  try {
    for (const dbName of DATABASES) {
      await db.query(`CREATE DATABASE ${dbName}`);
      created.push(dbName);
    }
    console.log('Databases created successfully');
  } catch (err) {
    for (const dbName of created) {
      async (dbName) => await db.query(`DROP DATABASE if exists ${dbName}`);
    }
    return fail(err);
  }
  await db.end();

  console.log(
    "Uploading schema to newly created databases. You'll need to "
      + ' put in your MySQL password a couple more times.',
  );

  for (const dbName of DATABASES) {
    console.log('Uploading schema to database:', dbName);
    try {
      await new Promise((resolve, reject) => exec(
        `mysql -u ${mysqlAdmin.user} -p ${dbName} < ${process.cwd()}/db/setup/schema.sql`,
        (error, stdout, stderr) => {
          if (error) {
            reject(error);
          }
          if (stderr) {
            reject(stderr);
          }
          resolve(stdout);
        },
      ));
      console.log('Success: Schema uploaded to', dbName);
    } catch (e) {
      console.log(e);
    }
  }

  console.log('Database configurations complete.');
}

if (require.main === module) {
  initialize().catch((err) => {
    console.log();
    console.log(err.message);
  });
}
