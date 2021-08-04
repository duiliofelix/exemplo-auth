const { createUser } = require('../../services/users');

const createUserController = async (req, res) => {
  const newUser = await createUser(req.body);

  res.send(newUser);
};

module.exports = createUserController;
