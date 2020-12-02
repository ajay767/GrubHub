const express = require('express');

const restaurantController = require('./../controllers/restaurantController');
// const authController = require('./../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(restaurantController.getAllRestaurants)
  .post(restaurantController.createRestaurant);

router
  .route('/:id')
  .get(restaurantController.getRestaurant)
  .patch(restaurantController.updateRestaurant)
  .delete(restaurantController.deleteRestaurant);

router
  .route('/coords/:latlng/unit/:unit/distance/:distance')
  .get(restaurantController.getRestaurantByLocation);
module.exports = router;
