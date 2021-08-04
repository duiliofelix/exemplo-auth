const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: String,
  deleted: Boolean,
});
const UserModel = mongoose.model('User', UserSchema);

module.exports = {
  UserSchema,
  UserModel,
};
