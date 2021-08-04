const { findAll } = require('../../services/users');

const getUsers = async (req, res) => {
  const allUsers = await findAll();

  res.send(allUsers);
};

module.exports = getUsers;
