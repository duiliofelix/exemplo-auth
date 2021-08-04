const express = require('express');
const { tryLogin, authorize, logoff } = require('../controllers/auth');

const router = express.Router();

router.post('/', tryLogin);
router.post('/authorize', authorize);
router.post('/logoff', logoff);

module.exports = router;
