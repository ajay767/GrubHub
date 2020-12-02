const dishModel = require('./../models/dishModel');

exports.getAllDishes = async (req, res) => {
  try {
    const dishes = await dishModel.find();
    res.status(200).json({
      status: 'success',
      data: {
        dishes
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      error: error.message
    });
  }
};

exports.deleteDish = async (req, res) => {
  try {
    await dishModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        data: null
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message
    });
  }
};

exports.createDish = async (req, res) => {
  try {
    const dish = await dishModel.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        dish
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      error: error.message
    });
  }
};
