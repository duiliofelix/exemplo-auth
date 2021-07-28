const express = require('express');
const routes = require('./routes');

const server = express();
const port = 80;

server.use('/', routes);

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
