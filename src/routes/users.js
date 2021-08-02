const express = require('express');
const getUsers = require('../controllers/users/getUsers');

const router = express.Router();

router.get('/', getUsers);

router.post('/', async (req, res) => {
  await funcaoAsync();
  res.send('Hello World!');
});

module.exports = router;
