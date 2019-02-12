const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
require('env2')('config.env');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
module.exports = app;
