const express = require('express');
const users = require('./users');

const router = express.Router();

router.get('/health', (req, res) => {
  res.send({ status: 'ok' });
});

router.use('/users', users);
router.use((req, res) => {
  res.status(404).send('Not Found');
});

module.exports = router;
