const express = require('express');
const authController = require('../controller/authController');
const protected = require('../utils/protectResource');

const router = express.Router();

router.post('/sing-up', authController.signup);
router.post('/login', authController.login);
router.get('/', protected, authController.allUsers);

module.exports = router;
