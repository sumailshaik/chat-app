const Chat = require('../models/chatModel');
const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// CREATE or FIND CHAT
exports.accessChat = catchAsync(async (req, res, next) => {
  const { userId } = req.body;

  if (!userId) {
    next(new AppError('UserId param not sent with request', 400));
  }

  let isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate('users')
    .populate('latestMessage');

  isChat = await User.populate(isChat, {
    path: 'latestMessage.sender',
    select: 'name pic email',
  });

  if (isChat.length > 0) {
    res.status(200).json({
      status: 'success',
      data: isChat[0],
    });
  } else {
    let chatData = {
      chatName: 'singleChat',
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    console.log(chatData);

    const createdChat = await Chat.create(chatData);
    const fullChat = await Chat.findOne({ _id: createdChat._id }).populate(
      'users'
    );

    res.status(200).json({
      status: 'success',
      data: fullChat,
    });
  }
});

// GET ALL CHATS
exports.getAllChats = catchAsync(async (req, res, next) => {
  let chats = await Chat.find({
    users: { $elemMatch: { $eq: req.user._id } },
  })
    .populate('users')
    .populate('groupAdmin')
    .populate('latestMessage')
    .sort({ updatedAt: -1 });

  chats = await User.populate(chats, {
    path: 'latestMessage.sender',
    select: 'name pic email',
  });

  res.status(200).json({
    status: 'success',
    data: chats,
  });
});

// CREATE GROUP CHAT
exports.createGroupChat = catchAsync(async (req, res, next) => {
  if (!req.body.users || !req.body.name) {
    next(new AppError('Please provide group name or members in group', 400));
  }

  //let users = JSON.parse(req.body.users);
  let users = req.body.users;

  if (users.length < 2) {
    next(new AppError('Atleast 2 members needed in group'), 400);
  }

  users.push(req.user);

  const groupChat = await Chat.create({
    chatName: req.body.name,
    isGroupChat: true,
    users: users,
    groupAdmin: req.user,
  });

  const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
    .populate('users')
    .populate('groupAdmin');

  res.status(200).json({
    status: 'succcess',
    data: fullGroupChat,
  });
});

// RENAME GROUP
exports.renameGroup = catchAsync(async (req, res, next) => {
  const { chatId, chatName } = req.body;

  const updatedGroupChat = await Chat.findByIdAndUpdate(
    chatId,
    { chatName: chatName },
    { new: true }
  )
    .populate('users')
    .populate('groupAdmin');

  res.status(200).json(updatedGroupChat);
});

// ADD MEMBER TO GROUP
exports.addToGroup = catchAsync(async (req, res, next) => {
  const { chatId, userId } = req.body;

  const added = await Chat.findByIdAndUpdate(
    chatId,
    {
      $push: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate('users')
    .populate('groupAdmin');

  res.status(200).json(added);
});

// REMOVE MEMBER FROM GROUP
exports.removeToGroup = catchAsync(async (req, res, next) => {
  const { chatId, userId } = req.body;

  const removed = await Chat.findByIdAndUpdate(
    chatId,
    {
      $pull: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate('users')
    .populate('groupAdmin');

  res.status(200).json(removed);
});
