const Objective = require('../models/Objective'); // eslint-disable-line no-unused-vars

const findAll = (req, res) => {
  Objective.find({})
    .exec((err, objectives) => {
      if (err) {
        res.json({ success: false, err: err.message });
      } else {
        const data = objectives.map(objective => ({
          id: objective.id,
          name: objective.name,
        }));
        res.json({ success: true, data });
      }
    });
};

module.exports = { findAll };
