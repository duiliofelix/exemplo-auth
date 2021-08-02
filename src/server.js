const express = require('express');
const routes = require('./routes');
const { PORT } = require('./config');
const logger = require('./services/logger');

const server = express();

server.use(express.json());
server.use('/', routes);

server.listen(PORT, () => {
  logger.info(`Listening at http://localhost:${PORT}`);
});
