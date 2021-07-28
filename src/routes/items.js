const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello Items!');
});

router.get('/:id', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;
