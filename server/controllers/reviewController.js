const Review = require('../models/Review');
const Product = require('../models/Product');

const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ productId: req.params.id }).sort({ createdAt: -1 });
    res.json({ success: true, count: reviews.length, data: reviews });
  } catch (error) {
    next(error);
  }
};

const addReview = async (req, res, next) => {
  try {
    const { author, rating, comment } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) {
      const err = new Error('Product not found');
      err.statusCode = 404;
      return next(err);
    }

    const review = await Review.create({
      productId: req.params.id,
      author,
      rating: Number(rating),
      comment,
    });

    const allReviews = await Review.find({ productId: req.params.id });
    const avgRating =
      allReviews.reduce((acc, r) => acc + r.rating, 0) / allReviews.length;
    await Product.findByIdAndUpdate(req.params.id, { rating: avgRating.toFixed(1) });

    res.status(201).json({ success: true, data: review });
  } catch (error) {
    next(error);
  }
};

module.exports = { getReviews, addReview };
