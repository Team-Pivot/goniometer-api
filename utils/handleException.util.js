import Logger from './logger.util';
import Exception from './exception.util';

export default function (err, res) {
  Logger.error(err);
  if (err.statusCode != null && err.statusCode !== 500) {
    return res.status(err.statusCode).json({
      status: 'error',
      statusCode: err.statusCode,
      message: err.message,
      errors: err.errors,
    });
  }
  return res.status(500).json({
    status: 'error',
    statusCode: 500,
    message: 'Internal Server Error',
  });
}
