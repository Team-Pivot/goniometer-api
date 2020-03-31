export default ({ message } = {}) => ({
  presence: true,
  type: 'string',
  format: {
    pattern: '[\\w\\d\\-\\s]+',
    flags: 'i',
    message: message || 'should only contain alphanumeric characters, hyphens, or spaces',
  },
});
