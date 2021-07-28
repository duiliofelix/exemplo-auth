const express = require('express');
const routes = require('./routes');

const server = express();
const port = 3000;

server.use('/', routes);

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
