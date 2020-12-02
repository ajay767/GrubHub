const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A restaurant cannot be registered without name.']
  },
  description: {
    type: String,
    required: true
  },
  location: {
    //geoJSON
    type: {
      type: String,
      default: 'point',
      enum: ['point'],
      required: true
    },
    coordinates: {
      type: [Number], //(Lng,Lat)  generally its (Lat,Lng).
      required: true
    },
    address: {
      type: String,
      required: true
    }
  },
  profilePhoto: String,
  backgroungPhoto: String,
  dishes: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Dish'
    }
  ],
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0']
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  }
});

restaurantSchema.pre('/^find/', function(next) {
  this.populate({
    path: 'dishes'
  });
  next();
});
restaurantSchema.index({ location: '2dsphere' });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;
