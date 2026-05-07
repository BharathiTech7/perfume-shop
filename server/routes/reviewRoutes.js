const express = require('express');
const router = express.Router({ mergeParams: true });
const { getReviews, addReview } = require('../controllers/reviewController');

router.get('/', getReviews);

router.post('/', addReview);

module.exports = router;
