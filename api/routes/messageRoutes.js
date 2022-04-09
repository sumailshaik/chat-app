const express = require('express');
const protected = require('../utils/protectResource');
const messageController = require('../controller/messageController');

const router = express.Router();

router.route('/:chatId').get(protected, messageController.getAllMessages);
router.route('/').post(protected, messageController.sendMessage);

module.exports = router;
