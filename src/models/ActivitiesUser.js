const mongoose = require('mongoose');

const { Schema } = mongoose;

const ActivitiesUserSchema = mongoose.Schema({
  UserId: { type: Schema.Types.ObjectId, ref: 'User' },
  ActivityId: { type: Schema.Types.ObjectId, ref: 'Activity' },
});

module.exports = mongoose.model('ActivitiesUser', ActivitiesUserSchema);
