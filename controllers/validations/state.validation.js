export default ({ presence = true } = {}) => ({
  presence,
  type: 'string',
  format: '[A-Z][A-Z]',
});
