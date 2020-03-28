import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import routes from './routes';

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('hello world'));

app.use('/v1', routes);

app.listen(3000, () => console.log('Pivot app deployed on port 3000'));

module.exports = {
  app,
};
