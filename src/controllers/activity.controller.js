const Activity = require('../models/Activity');

const add = (req, res) => {
  const {
    name, hours, startDate, endDate, trainerName, location, ProgramId, ObjectiveId,
  } = req.body;

  const activity = new Activity({
    name, hours, startDate, endDate, trainerName, location, ProgramId, ObjectiveId,
  });
  activity.save()
    .then(() => {
      res.json({ success: true });
    }).catch((err) => {
      res.json({ success: false, error: err.message });
    });
};

const index = (req, res) => {
  const activity = new Activity();
  activity.find({})
    .populate('programId')
    .populate('objectiveId')
    .exec((err, activities) => {
      console.log(activities);
      res.send({ state: true });
    });
};
module.exports = { add, index };
