const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  nome: String,
});
const UserModel = mongoose.Model(UserSchema, 'User');

module.exports = {
  UserSchema,
  UserModel,
};
