const { createTokenForUser } = require('../../services/auth');
const { findByUsernamePass } = require('../../services/users');

const tryLogin = async (req, res) => {
  const user = await findByUsernamePass(req.body.user, req.body.pass);

  if (!user) res.status(401).send();

  const token = await createTokenForUser(user);

  res.status(201).send(token);
};

module.exports = tryLogin;
