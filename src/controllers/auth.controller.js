const User = require('../models/User');
const bcrypt = require('bcrypt');

const saveUser = (user) => new Promise((resolve, reject) => {
  user.save((err, user) => {
    if(err){
      reject(err);
    } else {
      resolve(user);
    }
  });
});

const register = (req, res) => {
  const { name, living, address, gender, dateOfBirth, phoneNo, email, password } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => new User({ name, living, address, gender, dateOfBirth, phoneNo, email, password: hash, type: 'admin' }))
    .then(saveUser)
    .catch((err) => {
      res.json({ success: false, err: err.message });
    });
};

module.exports = {
  register,
};
