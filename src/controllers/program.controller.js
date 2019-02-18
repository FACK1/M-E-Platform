const Program = require('../models/Program');

const add = (req, res) => {
  const {
    name, organization,
  } = req.body;
  const program = new Program({
    name, organization,
  });
  program.save()
    .then(() => {
      res.json({ success: true });
    }).catch((err) => {
      res.json({ success: false, error: err.message });
    });
};


const findAll = (req, res) => {
  Program.find({})
    .populate('program')
    .exec((err, programs) => {
      if (err) {
        res.json({ success: false, error: err.message });
      } else {
        const data = programs.map(program => ({
          id: program._id, // eslint-disable-line no-underscore-dangle
          name: program.name,
          organization: program.organization,
        }));
        res.json({ success: true, data });
      }
    });
};

module.exports = { add, findAll };
