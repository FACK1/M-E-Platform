const mongoose = require('mongoose');

const ObjectiveSchema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Objective', ObjectiveSchema);
