const Product = require('../models/Product');

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.json({ success: true, count: products.length, data: products });
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      const err = new Error('Product not found');
      err.statusCode = 404;
      return next(err);
    }
    res.json({ success: true, data: product });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProducts, getProductById };
