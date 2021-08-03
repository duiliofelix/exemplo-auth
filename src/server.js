const express = require('express');
const routes = require('./routes');
const { PORT } = require('./config');
const logger = require('./services/logger');
const { logPathMiddleware, errorHandlerMiddleware } = require('./middleware');

const server = express();

server.use(express.json());
server.use(logPathMiddleware);
server.use('/', routes);
server.use(errorHandlerMiddleware);

server.listen(PORT, () => {
  logger.info(`Listening at http://localhost:${PORT}`);
});
