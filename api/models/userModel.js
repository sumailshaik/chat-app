const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    name: { type: 'String', required: [true, 'Please tell us your name!'] },
    email: {
      type: 'String',
      unique: true,
      required: [true, 'Please provide your email!'],
      lowercase: true,
    },
    password: {
      type: 'String',
      required: [true, 'Please provide your password!'],
      minlength: 8,
      select: false,
    },
    pic: {
      type: 'String',
      default:
        'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestaps: true }
);

userSchema.pre('save', async function (next) {
  // Only run this function if password is actually modified
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
