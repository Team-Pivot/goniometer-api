export default ({ presence = true, bounds = [0, 360] } = {}) => ({
  presence,
  type: 'number',
  numericality: {
    greaterThanOrEqualTo: bounds[0],
    lessThanOrEqualTo: bounds[1],
  },
});
