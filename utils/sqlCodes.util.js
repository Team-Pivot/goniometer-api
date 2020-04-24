export default {
  isFkError(err) {
    return err.code != null && err.code.startsWith('ER_NO_REFERENCED_ROW');
  },
};
