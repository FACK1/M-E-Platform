const User = require('../models/User');
const ActivitiesUser = require('../models/ActivitiesUser');

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
      res.json({ success: false, err: err.message });
    });
};

const importFromExcel = (req, res) => {
  var users=req.body.data;

  users.shift();
  users.pop();

  users.forEach(function(user) {

    const addUser = new User({
        name:user[0],
        type:user[1],
        living:user[2],
        address:user[3],
        gender:user[4],
        dateOfBirth:user[5],
        phoneNo:user[6],
        email:user[7],
      });
      addUser.save()
        .then(() => {
            res.json({ success: true });
          }).catch((err) => {
              res.json({ success: false, error: err.message });
            });
});
};

const findByName = (req, res) => {
  const { name, activityId } = req.params;
  User.find({ type: 'student', name: new RegExp(`^${name}`, 'i') }, 'id name dateOfBirth')
    .exec((err, users) => {
      if (err) {
        res.json({
          success: false,
          err: err.message,
        });
      } else {
        ActivitiesUser.find({ activity: activityId })
          .then((assignedUsers) => {
            const newAssignedUsers = assignedUsers.map(u => u.user.toString());
            const usersList = users.filter(u => !newAssignedUsers.includes(u.id.toString()));
            res.json({
              success: true,
              data: usersList,
            });
          })
          .catch((filterErr) => {
            res.json({
              success: false,
              err: filterErr.message,
            });
          });
      }
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

const getAgeByDate = date => (new Date()).getUTCFullYear() - date.getUTCFullYear();

const getUsersByActivityId = (req, res) => {
  const { activityId } = req.params;
  ActivitiesUser.find({ activity: activityId })
    .populate('user')
    .then((activitiesUsers) => {
      const mappedUsers = activitiesUsers.map(activityUser => ({
        id: activityUser.user.id,
        name: activityUser.user.name,
        age: getAgeByDate(activityUser.user.dateOfBirth),
        gender: activityUser.user.gender,
      }));
      return mappedUsers;
    })
    .then((users) => {
      res.json({ success: true, data: { users } });
    })
    .catch((err) => {
      res.json({ success: false, err: err.message });
    });
};

module.exports = { add, findAll, findByName,importFromExcel ,getAgeByDate ,getUsersByActivityId };
