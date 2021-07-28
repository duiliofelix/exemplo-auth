const express = require('express');
const items = require('./items');
const users = require('./users');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use('/items', items);
router.use('/users', users);

module.exports = router;
