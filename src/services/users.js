const { UserModel } = require('../database/users');

const createUser = async (data) => {
  const newUser = new UserModel(data);

  newUser.role = 'peasant';

  await newUser.save();

  return newUser;
};

const findByUsernamePass = async (username, pass) => {
  const user = await UserModel.findOne({
    username,
    pass,
    deleted: { $ne: true },
  });

  return user;
};

const findById = async (id) => {
  const user = await UserModel.findOne({
    _id: id,
    deleted: { $ne: true },
  });

  return user;
};

const findAll = async () => {
  const allUsers = await UserModel.find({ deleted: { $ne: true } });

  return allUsers;
};

const deleteById = async (id) => {
  const user = await findById(id);

  if (!user) return false;

  user.deleted = true;
  await user.save();

  return true;
};

module.exports = {
  createUser,
  findByUsernamePass,
  findById,
  findAll,
  deleteById,
};
