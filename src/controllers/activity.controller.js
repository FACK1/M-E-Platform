const Activity = require('../models/Activity.model');

const store = (req, res) => {
  const {
    name, hours, startDate, endDate, trainerName, location, ProgramId, ObjectiveId,
  } = req.body;

  const activity = new Activity({
    name, hours, startDate, endDate, trainerName, location, ProgramId, ObjectiveId,
  });
  activity.save()
    .then(() => {
      res.send({ state: true });
    }).catch((err) => {
      res.send({ state: false, error: err.message });
    });
};

module.exports = { store };
