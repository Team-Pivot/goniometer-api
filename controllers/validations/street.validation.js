export default ({ presence = true } = {}) => ({
  presence,
  type: 'string',
  format: '[\\d\\w\\s-]+',
});
