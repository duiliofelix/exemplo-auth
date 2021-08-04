const { findUserByToken, logoffUser } = require('../../services/auth');

const logoff = async (req, res) => {
  const user = await findUserByToken(req.body.token);

  if (!user) res.status(403).send();

  await logoffUser(user);

  res.status(204).send();
};

module.exports = logoff;
