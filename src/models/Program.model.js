const mongoose = require('mongoose');

const ProgramSchema = mongoose.Schema({
  name: String,
  organization: String,
});

module.exports = mongoose.model('Program', ProgramSchema);
