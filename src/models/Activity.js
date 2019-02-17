const mongoose = require('mongoose');

const { Schema } = mongoose;

const ActivitySchema = mongoose.Schema({
  name: String,
  trainerName: String,
  hours: Number,
  startDate: Date,
  endDate: Date,
  location: String,
  program: { type: Schema.Types.ObjectId, ref: 'Program' },
  objective: { type: Schema.Types.ObjectId, ref: 'Objective' },
});

module.exports = mongoose.model('Activity', ActivitySchema);
