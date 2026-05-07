require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const mongoose = require('mongoose');
const Product = require('../models/Product');
const Review = require('../models/Review');

const products = [
  {
    name: 'Royal Oud of Mysore',
    shortDescription: 'A majestic blend of pure Mysore sandalwood and dark oud.',
    description: 'Inspired by the royal heritage of Mysore, this fragrance captures the essence of ancient palaces. It opens with spicy cardamom and saffron, leading into a heart of creamy sandalwood and rare oud wood. The base is a warm embrace of amber and musk, fit for royalty.',
    price: 4500,
    sizes: ['30ml', '50ml', '100ml'],
    images: ['/images/p1_1.jpg', '/images/p1_2.jpg', '/images/p1_3.jpg'],
    category: 'Oriental',
    rating: 4.9,
  },
  {
    name: 'Midnight Saffron',
    shortDescription: 'Golden saffron infused with midnight jasmine and vanilla.',
    description: 'Saffron, the "Red Gold" of Kashmir, is the soul of this enchanting scent. Paired with night-blooming jasmine and sweet Madagascar vanilla, it creates an aura of mystery and elegance that lingers long into the night.',
    price: 3200,
    sizes: ['50ml', '100ml'],
    images: ['/images/p2_1.jpg', '/images/p2_2.jpg', '/images/p2_3.jpg'],
    category: 'Oriental',
    rating: 4.7,
  },
  {
    name: 'Amber Sultan',
    shortDescription: 'Rich resinous amber with spicy cinnamon and tobacco.',
    description: 'A tribute to the grand spice markets. This fragrance is a heavy, intoxicating blend of aged amber resin, warm cinnamon bark, and a touch of sweet tobacco leaf. Bold, powerful, and deeply traditional.',
    price: 14200,
    sizes: ['100ml'],
    images: ['/images/p3_1.jpg', '/images/p3_2.jpg', '/images/p3_3.jpg'],
    category: 'Oriental',
    rating: 4.8,
  },
  {
    name: 'Kannauj Rose',
    shortDescription: 'The world\'s finest damask rose water in a perfume.',
    description: 'Straight from the perfume capital of India, Kannauj. This scent uses the traditional "Deg-Bhapka" method to extract the purest essence of Rosa Damascena. A timeless floral that feels like walking through a rose garden at dawn.',
    price: 9800,
    sizes: ['30ml', '50ml', '100ml'],
    images: ['/images/p4_1.jpg', '/images/p4_2.jpg', '/images/p4_3.jpg'],
    category: 'Floral',
    rating: 4.8,
  },
  {
    name: 'Jasmine Sambac',
    shortDescription: 'Purity of Indian Jasmine with a hint of green tea.',
    description: 'The intoxicating scent of Mogra (Indian Jasmine) flowers. It is fresh, sweet, and incredibly natural. Complemented by delicate green tea notes and a soft white musk base, it is the ultimate daytime floral.',
    price: 8500,
    sizes: ['50ml', '100ml'],
    images: ['/images/p5_1.jpg', '/images/p5_2.jpg', '/images/p5_3.jpg'],
    category: 'Floral',
    rating: 4.6,
  },
  {
    name: 'Marigold Dew',
    shortDescription: 'Golden marigolds sparkling with morning dew and citrus.',
    description: 'Inspired by the vibrant marigold garlands used in Indian celebrations. This fragrance is bright and joyful, blending sun-kissed marigolds with zesty bergamot and a touch of honeyed nectar.',
    price: 7200,
    sizes: ['50ml', '100ml'],
    images: ['/images/p6_1.jpg', '/images/p6_2.jpg', '/images/p6_3.jpg'],
    category: 'Floral',
    rating: 4.5,
  },
  {
    name: 'Himalayan Cedar',
    shortDescription: 'Crisp mountain air with silver fir and aged cedarwood.',
    description: 'Transport yourself to the high altitudes of the Himalayas. This scent is sharp, clean, and grounding. It features the majestic Deodar cedar, blended with cool silver fir and earthy vetiver.',
    price: 11000,
    sizes: ['50ml', '100ml'],
    images: ['/images/p7_1.jpg', '/images/p7_2.jpg', '/images/p7_3.jpg'],
    category: 'Woody',
    rating: 4.7,
  },
  {
    name: 'Black Vetiver',
    shortDescription: 'Smoky, earthy Khus roots with dark cocoa.',
    description: 'Earthy vetiver (Khus) is given a modern twist with a dark cocoa heart. It is sophisticated, mysterious, and incredibly masculine. A scent that represents the raw power of nature.',
    price: 13500,
    sizes: ['100ml'],
    images: ['/images/p8_1.jpg', '/images/p8_2.jpg', '/images/p8_3.jpg'],
    category: 'Woody',
    rating: 4.9,
  },
  {
    name: 'Teakwood Reserve',
    shortDescription: 'Polished teakwood with black pepper and leather.',
    description: 'A refined fragrance that smells of luxury interiors and heritage libraries. Notes of spiced black pepper, smooth leather, and deep teakwood create a lasting impression of power and success.',
    price: 15800,
    sizes: ['50ml', '100ml'],
    images: ['/images/p9_1.jpg', '/images/p9_2.jpg', '/images/p9_3.jpg'],
    category: 'Woody',
    rating: 4.8,
  },
  {
    name: 'Monsoon Rain',
    shortDescription: 'The scent of first rain on dry earth (Petrichor).',
    description: 'Mitti Attar captured in a modern spray. The incredible aroma of rain hitting parched soil, blended with cool ozone and a whisper of aquatic mint. Refreshing, nostalgic, and unique.',
    price: 10500,
    sizes: ['50ml', '100ml'],
    images: ['/images/p10_1.jpg', '/images/p10_2.jpg', '/images/p10_3.jpg'],
    category: 'Fresh',
    rating: 4.9,
  },
  {
    name: 'Citrus Grove',
    shortDescription: 'Zesty Indian lemons with ginger and lemongrass.',
    description: 'An explosion of freshness. Vibrant lemon and bergamot are paired with the spicy kick of fresh ginger and the aromatic sweetness of lemongrass. Perfect for the tropical summer.',
    price: 6800,
    sizes: ['30ml', '50ml', '100ml'],
    images: ['/images/p11_1.jpg', '/images/p11_2.jpg', '/images/p11_3.jpg'],
    category: 'Fresh',
    rating: 4.4,
  },
  {
    name: 'Coastal Breeze',
    shortDescription: 'Ocean salt with coconut water and white lily.',
    description: 'Inspired by the shores of Kerala. A breezy, aquatic fragrance that blends salty ocean spray with creamy coconut water and a heart of delicate white lilies. Light and effortlessly elegant.',
    price: 8900,
    sizes: ['50ml', '100ml'],
    images: ['/images/p12_1.jpg', '/images/p12_2.jpg', '/images/p12_3.jpg'],
    category: 'Fresh',
    rating: 4.6,
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    await Product.deleteMany({});
    await Review.deleteMany({});
    console.log('Cleared existing products and reviews');

    const insertedProducts = await Product.insertMany(products);
    console.log(`Inserted ${insertedProducts.length} products`);

    const sampleReviews = [
      { productId: insertedProducts[0]._id, author: 'Rajesh K.', rating: 5, comment: 'The Mysore Sandalwood here is absolutely authentic. Reminds me of home.' },
      { productId: insertedProducts[3]._id, author: 'Ananya S.', rating: 5, comment: 'Best rose perfume I have ever used. Not too sweet, just perfect.' },
      { productId: insertedProducts[9]._id, author: 'Vikram M.', rating: 5, comment: 'The Petrichor note is unbelievable. It really smells like the first rain!' },
      { productId: insertedProducts[1]._id, author: 'Priya R.', rating: 4, comment: 'Very elegant bottle and the saffron scent is so luxurious.' },
      { productId: insertedProducts[7]._id, author: 'Amit B.', rating: 5, comment: 'Strong, masculine, and lasts all day. Highly recommend.' },
    ];
    await Review.insertMany(sampleReviews);
    console.log(`Inserted ${sampleReviews.length} sample reviews`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error.message);
    process.exit(1);
  }
};

seedDatabase();
