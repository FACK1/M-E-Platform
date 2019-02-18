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


const findAll = (req, res) => {
  User.find({})
    .exec((err, users) => {
      if (err) {
        res.json({ success: false, error: err.message });
      } else {
        const data = users.map(user => ({
          id: user.id, // eslint-disable-line no-underscore-dangle
          name: user.name,
          type: user.type,
          living: user.living,
          address: user.address,
          gender: user.gender,
          dateOfBirth: new Date(user.dateOfBirth),
          phoneNo: user.phoneNo,
          email: user.email,
        }));
        res.json({ success: true, data });
      }
    });
};

module.exports = { add, findAll };
