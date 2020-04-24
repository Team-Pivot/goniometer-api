export default {
  error(err, ...params) {
    console.error(err, ...params);
  },
  warn(message, ...params) {
    console.warn(message, ...params);
  },
  log(message, ...params) {
    console.log(message, ...params);
  },
};
