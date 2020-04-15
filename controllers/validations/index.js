import _validate from 'validate.js';
import angle from './angle.validation';
import uuid from './uuid.validation';
import measurementTypes from './mTypes.validation';
import int from './int.validation';
import isoTime from './isoTime.validation';
import dateString from './dateString.validation';

_validate.validators.check = function (value, { fn }, key, attributes) {
  return fn(value);
};

export const validations = {
  angle,
  uuid,
  measurementTypes,
  int,
  isoTime,
  dateString,
};

export const validate = _validate;
