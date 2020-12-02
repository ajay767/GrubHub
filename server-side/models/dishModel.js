const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A dish cannot be created without name!']
  },
  isVeg: {
    type: Boolean,
    required: [true, 'Please specify veg or non veg']
  },
  restaurant: {
    type: mongoose.Schema.ObjectId,
    ref: 'Restaurant',
    required: [true, 'A dish must belong to a restaurant']
  },
  price: Number
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
