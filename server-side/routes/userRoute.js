const express = require('express');

const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');

const router = express.Router();

router.post('/login', authController.login);
router.post('/signUp', authController.signUp);

router.post(
  '/updatePassword',
  authController.protect,
  authController.updatePassword
);
router.get('/me', authController.protect, userController.getMyProfile);
router.post('/forgetPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.route('/').get(userController.getAllUser);
module.exports = router;
