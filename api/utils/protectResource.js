const jwt = require('jsonwebtoken');
const AppError = require('./appError');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

const protect = catchAsync(async (req, res, next) => {
  let token;
  // Checking if token is in header with Bearer
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
    // Payload of JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id);
    //console.log(req.user);

    next();
  }
  if (!token) {
    next(new AppError('Token not found', 400));
  }
});

module.exports = protect;
