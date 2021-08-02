const express = require('express');
const items = require('./items');
const users = require('./users');

const router = express.Router();

router.get('/health', (req, res) => {
  res.send({ status: 'ok' });
});

router.use('/users', users);

module.exports = router;
