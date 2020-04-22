export default ({ presence = true } = {}) => ({
  presence,
  type: 'string',
  format: '[\\d]+',
});
