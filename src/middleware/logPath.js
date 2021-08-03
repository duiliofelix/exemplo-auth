const logger = require('../services/logger');

const logPathMiddleware = (req, res, next) => {
  logger.info(req.path);
  next();
};

module.exports = logPathMiddleware;
