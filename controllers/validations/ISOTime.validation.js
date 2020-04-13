export default ({ presence = true } = {}) => ({
  presence,
  type: 'string',
  format: {
    pattern: '[\\d]{4}-[\\d]{2}-[\\d]{2}T[\\d]{2}:[\\d]{2}:[\\d]{2}.[\\d]{3}Z',
    flags: 'i',
  },
});
