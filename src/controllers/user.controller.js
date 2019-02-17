const User = require('../models/User');

const add = (req, res) => {
  const {
    name, type, living, address, gender, dateOfBirth, phoneNo, email,
  } = req.body;
  console.log('gender',gender);
  const user = new User({
    name, type, living, address, gender, dateOfBirth, phoneNo, email,
  });
  user.save()
    .then(() => {
      console.log('gendddddder',gender);

      res.json({ success: true });
    }).catch((err) => {
      res.json({ success: false, error: err.message });
    });
};
module.exports = { add };
