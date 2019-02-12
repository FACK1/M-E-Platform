const Program = require('../models/Program'); // eslint-disable-line no-unused-vars
const Objective = require('../models/Objective'); // eslint-disable-line no-unused-vars
const Activity = require('../models/Activity');

const add = (req, res) => {
  const {
    name, hours, startDate, endDate, trainerName, location, program, objective,
  } = req.body;

  const activity = new Activity({
    name, hours, startDate, endDate, trainerName, location, program, objective,
  });
  activity.save()
    .then(() => {
      res.json({ success: true });
    }).catch((err) => {
      res.json({ success: false, error: err.message });
    });
};

const findAll = (req, res) => {
  Activity.find({})
    .populate('program')
    .populate('objective')
    .exec((err, activities) => {
      if (err) {
        res.json({ success: false, error: err.message });
      } else {
        res.json({ success: true, data: activities });
      }
    });
};
module.exports = { add, findAll };
