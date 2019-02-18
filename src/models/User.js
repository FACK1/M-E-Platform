const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: String,
  type: { type: String, enum: ['admin', 'employee', 'trainer', 'student'] },
  living: { type: String, enum: ['city', 'village', 'camp'] },
  address: String,
  gender: { type: String, enum: ['male', 'female'] },
  dateOfBirth: Date,
  phoneNo: String,
  email: { type: String, unique: true, index: true },
});

module.exports = mongoose.model('User', UserSchema);
