const mongoose = require('mongoose');
const User = require('./userModel');

const chatSchema = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message',
    },
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    pic: { type: String, default: '' },
  },
  { timestamps: true }
);

chatSchema.pre('save', async function (next) {
  if (this.isGroupChat === true) {
    this.pic =
      'https://www.iconbunny.com/icons/media/catalog/product/2/8/2859.11-team-icon-iconbunny.jpg';
  }
  next();
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
