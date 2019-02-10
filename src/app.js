const express = require('express');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
require('env2')('config.env');

const app = express();
// const exphbs = require('express-handlebars');
const path = require('path');
// const router = require('./router.js');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));
// app.use(router);

app.set('views', path.join(__dirname, 'views'));


module.exports = app;
