const Joi = require('joi');
const Extension = require('joi-date-extensions');

const DateJoi = Joi.extend(Extension);

const checkUser = {
  name: Joi.string().required(),
  type: Joi.string().valid(['admin', 'employee', 'trainer', 'student']),
  email: Joi.string().email().required(),
  living: Joi.string().required().valid(['city', 'village', 'camp']),
  address: Joi.string().required(),
  gender: Joi.string().required().valid(['female', 'male']),
  dateOfBirth: DateJoi.date().required(),
  phoneNo: Joi.string().required().regex(/^[0-9]{10}$/),
};


module.exports = checkUser;
