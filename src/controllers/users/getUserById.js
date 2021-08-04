const { findById } = require('../../services/users');

const getUserById = async (req, res) => {
  const user = await findById(req.params.id);

  if (!user) res.status(404);

  res.send(user);
};

module.exports = getUserById;
