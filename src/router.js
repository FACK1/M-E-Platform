const express = require('express');
const path = require('path');

const controllers = require('./controllers');
const validations = require('./validations');

const router = express.Router();

router.post('/activities', controllers.activity.add);
router.get('/activities', controllers.activity.findAll);
router.get('/activities/:id', controllers.activity.findById);
router.post('/activities/addUserToActivity', controllers.activity.addUserToActivity);
router.get('/activities/getActivitesByProgramId/:programId', controllers.activity.getActivitesByProgramId);

router.post('/programs', controllers.program.add);
router.get('/programs', controllers.program.findAll);
router.get('/programs/:id', controllers.program.findById);

router.post('/users', validations.user, controllers.user.add);
router.get('/users', controllers.user.findAll);
router.get('/users/searchByName/:name', controllers.user.findByName);
router.get('/users/getUsersByActivityId/:activityId', controllers.user.getUsersByActivityId);

router.get('/objectives', controllers.objective.findAll);

router.post('/auth/register', controllers.auth.register);
router.post('/auth/login', controllers.auth.login);


router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});


module.exports = router;
