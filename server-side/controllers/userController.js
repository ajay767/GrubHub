const userModel = require('./../models/userModel');

exports.getAllUser = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json({
      status: 'success',
      data: {
        users
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message,
      error
    });
  }
};

exports.signUp = async (req, res) => {
  try {
    const currUser = await userModel.create(req.body);
    res.status(200).json({
      status: 'success',
      user: currUser
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message,
      error
    });
  }
};

exports.getMyProfile = async (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      data: {
        user: req.user
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message
    });
  }
};
