const mongoose = require('mongoose');

const { Schema } = mongoose;

const ActivitiesUserSchema = mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  activity: { type: Schema.Types.ObjectId, ref: 'Activity' },
});
ActivitiesUserSchema.index({ user: 1, activity: 1 }, { unique: true });

module.exports = mongoose.model('ActivitiesUser', ActivitiesUserSchema);
