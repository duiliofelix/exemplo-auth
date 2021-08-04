const { UserModel } = require('../database/users');

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
  findById,
  findAll,
  deleteById,
};
