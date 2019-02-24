const Joi = require('joi');
const checkUserValidation = require('./validation');

const validate = (req, res, next) => {
  Joi.validate(req.body, checkUserValidation, (err) => {
    if (err) {
      const errMessage = err.details.reduce((str, errObj) => (`${str}\n${errObj.message}`), '\n');
      res.json({ success: false, err: errMessage });
    } else {
      next();
    }
  });
};


module.exports = validate;
