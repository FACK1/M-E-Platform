const express = require('express');
const path = require('path');

const controllers = require('./controllers');

const router = express.Router();

router.post('/activities', controllers.activity.add);
router.get('/activities', controllers.activity.findAll);
router.get('/activities/:id', controllers.activity.findById);
router.post('/programs', controllers.program.add);
router.get('/programs', controllers.program.findAll);
router.post('/users', controllers.user.add);
router.get('/users', controllers.user.findAll);

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});


module.exports = router;
