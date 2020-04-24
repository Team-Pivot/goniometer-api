class Exception extends Error {
  constructor(statusCode = 500, ...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, Exception);
    }
    if (params[0] != null && typeof params[0] !== 'string') {
      this.errors = params[0];
      this.message = 'The following errors occurred:';
    }
    this.name = 'Exception';
    this.statusCode = statusCode;
    this.timestamp = new Date();
  }
}

export default Exception;
