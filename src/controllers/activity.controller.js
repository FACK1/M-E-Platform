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
      res.json({ success: false, err: err.message });
    });
};

const findAll = (req, res) => {
  Activity.find({})
    .populate('program')
    .populate('objective')
    .exec((err, activities) => {
      if (err) {
        res.json({ success: false, err: err.message });
      } else {
        const data = activities.map(activity => ({
          id: activity._id, // eslint-disable-line no-underscore-dangle
          name: activity.name,
          startDate: new Date(activity.startDate),
          endDate: new Date(activity.endDate),
          trainerName: activity.trainerName,
          location: activity.location,
          program: activity.program.name,
          objective: activity.objective.name,
          hours: activity.hours,
        }));
        res.json({ success: true, data });
      }
    });
};

const findById = (req, res) => {
  const { id } = req.params;
  Activity.findById(id)
    .populate('program')
    .populate('objective')
    .exec((err, activity) => {
      if (err) {
        res.json({ success: false, err: err.message });
      } else {
        res.json({ success: true, data: activity });
      }
    });
};

module.exports = { add, findAll, findById };
