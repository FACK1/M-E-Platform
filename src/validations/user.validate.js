const Joi = require('joi');
const checkUserValidation = require('./validation');

const validate = (req, res, next) => {
  Joi.validate(req.body, checkUserValidation, (err) => {
    if (err) {
      res.json({ err });
    } else {
      res.json({ result: 'true' });
      next();
    }
  });
};


module.exports = validate;
