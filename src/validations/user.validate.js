const Joi = require('joi');
const checkUserValidation = require('./validation');

const validate = (req, res, next) => {
  Joi.validate(req.body, checkUserValidation, (err) => {
    if (err) {
      res.json({ success: false, err: err.message });
    } else {
      next();
    }
  });
};


module.exports = validate;
