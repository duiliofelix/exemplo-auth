const { UserModel } = require('../../database/users');

const createUser = async (req, res) => {
  const newUser = new UserModel(req.body);
  await newUser.save();

  res.send(newUser);
};

module.exports = createUser;
