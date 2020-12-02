const AppError = require('../utils/AppError');
const RestaurantModel = require('./../models/restaurantModel');

exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await RestaurantModel.find();
    res.status(200).json({
      status: 'success',
      data: { restaurants }
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      error: error.message
    });
  }
};

exports.getRestaurant = async (req, res) => {
  try {
    const restaurant = await RestaurantModel.findById(req.params.id).populate({
      path: 'dishes'
    });
    res.status(200).json({
      status: 'success',
      data: {
        restaurant
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

exports.createRestaurant = async (req, res) => {
  try {
    const restaurant = await RestaurantModel.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        restaurant
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

exports.updateRestaurant = async (req, res) => {
  try {
    const updatedrestaurant = await RestaurantModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedrestaurant) {
      res.status(404).json({
        status: 'failed',
        message: `No Restaurant with id ${req.params.id} found!!`
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        updatedrestaurant
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

exports.deleteRestaurant = async (req, res) => {
  try {
    await RestaurantModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message,
      error
    });
  }
};

exports.getRestaurantByLocation = async (req, res, next) => {
  try {
    const { latlng, distance, unit } = req.params;
    const [lat, lng] = latlng.split(',');
    const radius = unit === 'mi' ? distance / 3963.2 : distance / 6378.1;
    //24.0627° N, 82.6248° E
    console.log(
      `latitude = ${lat}\n longitude = ${lng} \n distance = ${distance} \n unit = ${unit}`
    );

    if (!lat || !lng) {
      return next(new AppError('please provide your location Info.', 404));
    }
    // {$geoWithin: { $centerSphere: [ [ 82.64923103817314, 24.084358122051682 ], 0.0005834224441840135 ]}},$or: []}
    console.log('All good');
    const restauranstsNearBy = await RestaurantModel.find({
      'location.coordinates': {
        $geoWithin: { $centerSphere: [[lng, lat], radius] }
      }
    });

    res.status(200).json({
      status: 'success',
      data: {
        result: restauranstsNearBy.length,
        restaurants: restauranstsNearBy
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
