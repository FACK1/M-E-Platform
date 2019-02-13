const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router');
require('env2')('config.env');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.use(router);
module.exports = app;
