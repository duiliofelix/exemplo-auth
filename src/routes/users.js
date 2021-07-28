const express = require('express');
const getUsers = require('../controllers/users/getUsers');

const router = express.Router();

router.get('/', getUsers);

router.post('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;
