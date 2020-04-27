import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import config from './.config';

import routes from './routes';
import { handleException } from './utils';

const app = express();
const PORT = config.port || 3000;

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('hello world'));

app.use('/v1', routes);

app.use((err, req, res, next) => {
  handleException(err, res);
});

app.listen(PORT, () => console.log(`Pivot app deployed on port ${PORT}`));

module.exports = {
  app,
};
