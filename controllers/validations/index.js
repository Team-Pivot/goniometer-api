import _validate from 'validate.js';
import { Exception } from '../../utils';
import angle from './angle.validation';
import uuid from './uuid.validation';
import measurementTypes from './mTypes.validation';
import int from './int.validation';
import isoTime from './isoTime.validation';
import dateString from './dateString.validation';
import simpleName from './simpleName.validation';
import street from './street.validation';
import zipcode from './zipcode.validation';
import state from './state.validation';

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
  simpleName,
  street,
  zipcode,
  state,
};

export const validate = (...params) => {
  const errors = _validate(...params);
  if (errors != null) {
    throw new Exception(400, errors);
  }
};
