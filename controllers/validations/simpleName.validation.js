export default ({ presence = false } = {}) => ({
  presence,
  type: 'string',
  format: '[\\w\\d-_\\s]+',
});
