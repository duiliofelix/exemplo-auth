const { findUserByToken } = require('../../services/auth');

const authorize = async (req, res) => {
  const user = await findUserByToken(req.body.token);

  if (!user) res.status(403).send();
  else res.send({ role: user.role });
};

module.exports = authorize;
