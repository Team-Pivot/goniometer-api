export default ({ bounds, presence = true } = {}) => ({
  presence,
  type: 'number',
  numericality: {
    onlyInteger: true,
    greaterThanOrEqualTo: bounds != null && bounds[0] != null ? bounds[0] : undefined,
    lessThanOrEqualTo: bounds != null && bounds[1] != null ? bounds[1] : undefined,
  },
});
