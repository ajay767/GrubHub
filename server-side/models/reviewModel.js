const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: [true, 'Review cannot be empty!']
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, 'Rating cannot be empty']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  dish: {
    type: mongoose.Schema.ObjectId,
    ref: 'Dish',
    required: [true, 'Review must belong to a Dish']
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Review must belong to a user']
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
