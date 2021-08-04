const express = require('express');
const {
  createUser, getUsers, getUserById, deleteUser,
} = require('../controllers/users');

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);

module.exports = router;
