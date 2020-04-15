const dateTest = /^[\d]{2}[-/][\d]{2}[-/][\d]{4}$/;

export default ({ presence = true } = {}) => ({
  presence,
  type: 'string',
  format: {
    pattern: '[\\d]{2}[-/][\\d]{2}[-/][\\d]{4}',
    flags: 'i',
  },
  check: {
    fn: (v) => {
      if (typeof v !== 'string') return;
      if (!dateTest.test(v)) return;
      const d = new Date(v);
      return d instanceof Date && !isNaN(d) ? undefined : 'is an invalid date';
    },
  },
});
