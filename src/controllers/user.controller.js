const User = require('../models/User');

const add = (req, res) => {
  const {
    name, type, living, address, gender, dateOfBirth, phoneNo, email,
  } = req.body;
  const user = new User({
    name, type, living, address, gender, dateOfBirth, phoneNo, email,
  });
  user.save()
    .then(() => {
      res.json({ success: true });
    }).catch((err) => {
      res.json({ success: false, error: err.message });
    });
};

const findByName = (req, res) => {
  const { name } = req.params;
  User.find({ type: 'student', name: new RegExp(`^${name}`, 'i') }, 'id name dateOfBirth')
    .exec((err, users) => {
      if (err) {
        res.json({ success: false, err: err.message });
      } else {
        res.json({ success: true, data: users });
      }
    });
};

module.exports = { add, findByName };
