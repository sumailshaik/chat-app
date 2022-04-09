const express = require('express');
const protected = require('../utils/protectResource');
const chatController = require('../controller/chatController');

const router = express.Router();

router.post('/', protected, chatController.accessChat);
router.get('/', protected, chatController.getAllChats);
router.post('/create/group-chat', protected, chatController.createGroupChat);
router.post('/rename/group-chat', protected, chatController.renameGroup);
router.post('/add-member', protected, chatController.addToGroup);
router.post('/remove-member', protected, chatController.removeToGroup);

module.exports = router;
