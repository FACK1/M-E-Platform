const mongoose = require('mongoose');
require('env2')('config.env');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useCreateIndex: true });

mongoose.connection.on('connected', () => {
  // eslint-disable-next-line no-console
  console.log('mongoose connected successfully!');
});
mongoose.connection.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.log('mongoose connection error: ', err);
});
mongoose.connection.on('disconnected', () => {
  // eslint-disable-next-line no-console
  console.log('mongoose has been disconnected!');
});
