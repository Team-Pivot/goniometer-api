const Prompt = require('prompt');

Prompt.message = ' > ';
Prompt.delimiter = '';
Prompt.colors = false;

const prompt = {
  start: Prompt.start,
  get: async (schema) => new Promise((resolve, reject) => {
    Prompt.get(schema, (err, result) => {
      if (!err) {
        return resolve(result);
      }
      return reject(err);
    });
  }),
};

module.exports.getAuth = async function () {
  return prompt.get({
    properties: {
      user: {
        description: 'Username:',
        required: true,
      },
      password: {
        description: 'Password:',
        hidden: true,
        replace: '*',
        required: true,
      },
    },
  });
};

module.exports.getYesOrNo = async function (message = 'Are you sure?  (y/N): ', deflt = 'n') {
  const { yesno } = await prompt.get({
    properties: {
      yesno: {
        message: 'Attempt to create the new user? (y/N): ',
        validator: /[yY][es]*|[nN][o]?/,
        warning: 'Must respond (y)es or (n)o',
        default: deflt,
        required: true,
      },
    },
  });

  return yesno.toLowerCase()[0] === 'y';
};
