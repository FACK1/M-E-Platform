const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: String,
  type: Number,
  living: ['city', 'village', 'camp'],
  address: String,
  gender: String,
  dateOfBirth: Date,
  phoneNo: String,
  email: { type: String, unique: true },
});

module.exports = mongoose.model('User', UserSchema);
