const { UserModel } = require('../database/users');

const cadastraItem = async (data) => {
  const newItem = new UserModel(data);

  await newItem.save();
};

module.exports = cadastraItem;
