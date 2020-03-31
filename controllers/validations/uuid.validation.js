const uuidPattern = /^$/;

export default ({ presence = true } = {}) => ({
  presence,
  type: 'string',
  format: {
    pattern: '[a-f\\d]{8}-[a-f\\d]{4}-[a-f\\d]{4}-[a-f\\d]{4}-[a-f\\d]{12}',
    flags: 'i',
  },
});
