const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: String,
  deleted: Boolean,
  username: String,
  pass: String,
  role: String,
  tokens: [String],
});
const UserModel = mongoose.model('User', UserSchema);

module.exports = {
  UserSchema,
  UserModel,
};
