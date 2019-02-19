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
      res.json({ success: false, err: err.message });
    });
};


const findAll = (req, res) => {
  Program.find({})
    .populate('program')
    .exec((err, programs) => {
      if (err) {
        res.json({ success: false, err: err.message });
      } else {
        const data = programs.map(program => ({
          id: program.id,
          name: program.name,
          organization: program.organization,
        }));
        res.json({ success: true, data });
      }
    });
};

const findById = (req, res) => {
  const { id } = req.params;
  Program.findById(id)
    .populate('program')
    .exec((err, program) => {
      if (err) {
        res.json({ success: false, err: err.messag });
      } else {
        res.json({ success: true, data: program });
      }
    });
};

module.exports = { add, findAll, findById };
