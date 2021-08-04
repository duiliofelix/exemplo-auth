const authorize = require('./authorize');
const logoff = require('./logoff');
const tryLogin = require('./tryLogin');

module.exports = {
  tryLogin,
  authorize,
  logoff,
};
