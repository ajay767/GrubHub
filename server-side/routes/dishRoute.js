const express = require('express');
const dishController = require('./../controllers/dishController');

const router = express.Router();

router
  .route('/')
  .get(dishController.getAllDishes)
  .post(dishController.createDish);

router.route('/:id').delete(dishController.deleteDish);

module.exports = router;
