const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('env2')('config.env');

const saveUser = (user) => new Promise((resolve, reject) => {
  user.save((err, user) => {
    if(err){
      reject(err);
    } else {
      resolve(user.id);
    }
  });
});

const generateCookieToken = id => new Promise((resolve, reject) => {
  const { SECRET } = process.env;
  jwt.sign(id, SECRET, (signErr, token) => {
    if (signErr) reject(signErr);
    else resolve(token);
  });
});

const register = (req, res) => {
  const { name, living, address, gender, dateOfBirth, phoneNo, email, password } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => new User({ name, living, address, gender, dateOfBirth, phoneNo, email, password: hash, type: 'admin' }))
    .then(saveUser)
    .then(generateCookieToken)
    .then((token) => {
      res.cookie('id', token, { maxAge: 360000000 });
      res.json({ success: true, data: { loginState: true } });
    })
    .catch((err) => {
      res.json({ success: false, err: err.message });
    });
};

const login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => new Promise((resolve, reject) => {
      console.log("User password:::", password);
      console.log("Hashed password:::", user);
      bcrypt.compare(password, user.password)
        .then((result) => {
          if (result){
            resolve(user.id);
          } else {
            reject(new Error('Bad password!'));
          }

        }).catch((err) => {
          reject(err);
      });
    }))
    .then(generateCookieToken)
    .then((token) => {
      res.cookie('id', token, { maxAge: 360000000 });
      res.json({success: true, data: { loginState: true }});
    })
    .catch((err) => {
      console.log(err);
      res.json({ success: false, err: err.message });
    });

};

module.exports = {
  register,
  login,
};
