const isoTest = /^[\d]{4}-[\d]{2}-[\d]{2}T[\d]{2}:[\d]{2}:[\d]{2}.[\d]{3}$/;

export default ({ presence = true } = {}) => ({
  presence,
  type: 'string',
  format: {
    pattern: '[\\d]{4}-[\\d]{2}-[\\d]{2}T[\\d]{2}:[\\d]{2}:[\\d]{2}.[\\d]{3}Z',
    flags: 'i',
  },
  check: {
    fn: (v) => {
      if (typeof v !== 'string') return;
      if (!dateTest.test(v)) return;
      return d instanceof Date && !isNaN(d) ? undefined : 'is an invalid date';
    },
  },
});
