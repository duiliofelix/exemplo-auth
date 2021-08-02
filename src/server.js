const express = require('express');
const routes = require('./routes');
const { PORT } = require('./config');

const server = express();

server.use(express.json());
server.use('/', routes);

server.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
