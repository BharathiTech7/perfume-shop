const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
    },
    shortDescription: {
      type: String,
      required: [true, 'Short description is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },
    sizes: {
      type: [String],
      default: ['30ml', '50ml', '100ml'],
    },
    images: {
      type: [String],
      required: [true, 'At least one image is required'],
    },
    category: {
      type: String,
      enum: ['Floral', 'Woody', 'Oriental', 'Fresh', 'Gourmand', 'Chypre'],
      default: 'Floral',
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
