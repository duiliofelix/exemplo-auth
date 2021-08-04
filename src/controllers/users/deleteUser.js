const { deleteById } = require('../../services/users');

const deleteUser = async (req, res) => {
  const result = await deleteById(req.params.id);

  if (!result) res.status(404);

  res.send();
};

module.exports = deleteUser;
