const Chat = require('../models/chatModel');
const Message = require('../models/messageModel');
const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllMessages = catchAsync(async (req, res, next) => {
  const messages = await Message.find({ chat: req.params.chatId })
    .populate('sender', 'name pic email')
    .populate('chat');

  res.status(200).json({
    status: 'success',
    data: messages,
  });
});

exports.sendMessage = catchAsync(async (req, res, next) => {
  const { content, chatId } = req.body;

  // Checking whether message text & chat id is provided in body
  if (!content || !chatId) {
    next(new AppError('invalid data', 400));
  }

  // Preparing message feed
  let MessageFeed = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };

  const messagecreated = await Message.create(MessageFeed);
  let message = await Message.findById(messagecreated._id)
    .populate('sender', 'name pic')
    .populate('chat');

  // In resultant documents include chat.users sub documents
  message = await User.populate(message, {
    path: 'chat.users',
    select: 'name pic email',
  });

  // update latest message data in chat
  await Chat.findByIdAndUpdate(req.params.chatId, { latestMessage: message });

  res.status(200).json({
    status: 'success',
    data: message,
  });
});
