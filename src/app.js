const express = require('express');
const router = require('./router');
require('env2')('config.env');

const app = express();

app.use(router);
module.exports = app;
