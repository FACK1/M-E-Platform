const mongoose = require('mongoose');

const { Schema } = mongoose;

const ActivitiesUserSchema = mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  activityId: { type: Schema.Types.ObjectId, ref: 'Activity' },
});

module.exports = mongoose.model('ActivitiesUser', ActivitiesUserSchema);
