const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const crypto = require('crypto');

const AppError = require('./../utils/AppError');
const userModel = require('./../models/userModel');
const sendEmail = require('./../utils/email');

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.EXPIRES_IN
  });
};

const createSendToken = (user, statusCode, res) => {
  const id = user._id;
  const token = signToken(id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
  res.cookie('jwt', token, cookieOptions);
  res.status(statusCode).json({
    status: 'success',
    data: {
      token: token
    }
  });
};

exports.signUp = async (req, res, next) => {
  try {
    const newUser = await userModel.create({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      password: req.body.password,
      passwordChangedAt: req.body.passwordChangedAt,
      confirmPassword: req.body.confirmPassword
    });
    createSendToken(newUser, 200, res);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new AppError('please provide Email and Password!', 400));
    }

    const user = await userModel.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError('Please provide valid Email and password', 400));
    }
    createSendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message
    });
  }
};

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(
      new AppError('you are not Logeed In. Please login to get access!!', 401)
    );
  }
  const decoded = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET_KEY
  );
  const currUser = await userModel.findById(decoded.id);
  if (!currUser) {
    return next(
      new AppError('The user belonging to this token no longer exists!!', 404)
    );
  }
  if (currUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password. Please login again.', 401)
    );
  }
  req.user = currUser;
  next();
};

exports.forgotPassword = async (req, res, next) => {
  const user = await userModel.findOne({ email: req.body.email });
  if (!user) return next(new AppError('No user found!!', 404));

  const resetToken = await user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const resetURL = `${req.protocol}://${req.get(
    'host'
  )}/api/v1/users/resetPassword/${resetToken}`;

  const message = `Fogot your password ? submit a patch request at ${resetURL}.\n`;
  try {
    await sendEmail({
      email: user.email,
      subject: `your reset password link is valid only for 10min.`,
      text: message
    });

    res.status(200).json({
      status: 'success',
      message: 'Reset token is sent to user email address!'
    });
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpiresIn = undefined;
    await user.save({ validateBeforeSave: false });
    return next(
      new AppError('some error occured please try again later!', 500)
    );
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

    const user = await userModel.findOne({
      passwordResetToken: hashedToken,
      passwordResetTokenExpiresIn: { $gt: Date.now() }
    });

    if (!user) return next(new AppError('Token is Invalid or expired!!', 404));

    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpiresIn = undefined;
    await user.save();
    createSendToken(user, 200, res);
  } catch (error) {
    res.status(401).json({
      status: 'failed',
      message: error.message
    });
  }
};

exports.updatePassword = async (req, res, next) => {
  try {
    const currUser = await userModel.findById(req.user._id).select('+password');

    const isUser = await req.user.correctPassword(
      req.body.oldPassword,
      currUser.password
    );
    console.log(isUser);
    if (!isUser) {
      return next(new AppError('Wrong password!!', 404));
    }
    console.log(currUser._id);
    currUser.password = req.body.password;
    currUser.confirmPassword = req.body.confirmPassword;
    await currUser.save();
    createSendToken(currUser, 200, res);
  } catch (error) {
    res.status(401).json({
      status: 'failed',
      message: error.message
    });
  }
};
