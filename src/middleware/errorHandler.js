const logger = require('../services/logger');

// eslint-disable-next-line no-unused-vars
const errorHandlerMiddleware = (err, req, res, next) => {
  logger.error(err.message);
  res.status(500).send('Not ok!');
};

module.exports = errorHandlerMiddleware;
