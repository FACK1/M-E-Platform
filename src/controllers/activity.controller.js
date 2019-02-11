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


module.exports = { add };
