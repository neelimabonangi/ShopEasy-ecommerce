import { Product, ProductCategory } from '../types/Product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'Experience crystal-clear sound with these premium wireless headphones. Features active noise cancellation, 30-hour battery life, and comfortable over-ear design perfect for extended listening sessions.',
    price: 249.99,
    brand: 'SoundMax',
    category: 'Electronics',
    imageUrl: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    name: 'Ultra Slim Smartphone',
    description: 'The latest smartphone with a 6.5-inch AMOLED display, 128GB storage, advanced camera system, and all-day battery life. Perfect for photography enthusiasts and mobile gamers.',
    price: 799.99,
    brand: 'TechGiant',
    category: 'Electronics',
    imageUrl: 'https://images.pexels.com/photos/11772511/pexels-photo-11772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    name: 'Men\'s Casual Denim Jacket',
    description: 'Classic denim jacket with a modern fit. Made from premium cotton denim with subtle distressing for a lived-in look. Versatile enough to pair with any outfit.',
    price: 89.99,
    brand: 'UrbanStyle',
    category: 'Clothing',
    imageUrl: 'https://images.pexels.com/photos/1796089/pexels-photo-1796089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '4',
    name: 'Smart Home Security Camera',
    description: 'Keep your home secure with this HD security camera. Features motion detection, two-way audio, night vision, and cloud storage. Easy setup with smartphone app control.',
    price: 129.99,
    brand: 'SafeGuard',
    category: 'Electronics',
    imageUrl: 'https://images.pexels.com/photos/3061171/pexels-photo-3061171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '5',
    name: 'Professional Blender',
    description: 'Professional-grade blender with variable speed control and pulse function. Powerful enough to blend even the toughest ingredients for smoothies, soups, and more.',
    price: 179.99,
    brand: 'KitchenPro',
    category: 'Home & Kitchen',
    imageUrl: 'https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '6',
    name: 'Women\'s Running Shoes',
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper. Designed for comfort during long runs with excellent arch support and durable outsole.',
    price: 129.99,
    brand: 'ActiveStep',
    category: 'Sports',
    imageUrl: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '7',
    name: 'Organic Face Moisturizer',
    description: 'Hydrating face moisturizer made with 100% organic ingredients. Suitable for all skin types, this non-greasy formula absorbs quickly to nourish and protect your skin.',
    price: 34.99,
    brand: 'NaturalGlow',
    category: 'Beauty',
    imageUrl: 'https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '8',
    name: 'Stainless Steel Water Bottle',
    description: 'Double-walled insulated water bottle keeps beverages cold for 24 hours or hot for 12 hours. Leak-proof design, BPA-free, and available in multiple colors.',
    price: 29.99,
    brand: 'HydroLife',
    category: 'Sports',
    imageUrl: 'https://images.pexels.com/photos/2779462/pexels-photo-2779462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '9',
    name: '4K Smart TV',
    description: 'Ultra HD Smart TV with vibrant picture quality and immersive sound. Features built-in streaming apps, voice control, and seamless connectivity with your other devices.',
    price: 699.99,
    brand: 'VisionTech',
    category: 'Electronics',
    imageUrl: 'https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '10',
    name: 'Ergonomic Office Chair',
    description: 'Comfortable office chair with adjustable height, lumbar support, and breathable mesh back. Perfect for long work days with smooth-rolling casters and 360-degree swivel.',
    price: 199.99,
    brand: 'ComfortWorks',
    category: 'Home & Kitchen',
    imageUrl: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '11',
    name: 'Classic Leather Wallet',
    description: 'Handcrafted genuine leather wallet with multiple card slots and bill compartments. Slim profile with RFID blocking technology to protect your personal information.',
    price: 49.99,
    brand: 'LeatherCraft',
    category: 'Clothing',
    imageUrl: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '12',
    name: 'Wireless Gaming Mouse',
    description: 'High-performance wireless gaming mouse with customizable RGB lighting and programmable buttons. Ultra-precise optical sensor with adjustable DPI for gaming precision.',
    price: 79.99,
    brand: 'GameMaster',
    category: 'Electronics',
    imageUrl: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '13',
    name: 'Ceramic Plant Pot Set',
    description: 'Set of 3 minimalist ceramic plant pots in varying sizes. Modern design with drainage holes and bamboo trays. Perfect for succulents, herbs, or small indoor plants.',
    price: 39.99,
    brand: 'GreenHome',
    category: 'Home & Kitchen',
    imageUrl: 'https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '14',
    name: 'Bestselling Novel',
    description: 'The latest bestselling novel from acclaimed author Jane Smith. This page-turner combines mystery and romance in a compelling story that will keep you reading late into the night.',
    price: 19.99,
    brand: 'Literary Press',
    category: 'Books',
    imageUrl: 'https://images.pexels.com/photos/2203051/pexels-photo-2203051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '15',
    name: 'Fitness Tracker Watch',
    description: 'Advanced fitness tracker with heart rate monitoring, sleep tracking, and 20+ exercise modes. Water-resistant design with smartphone notifications and 7-day battery life.',
    price: 149.99,
    brand: 'FitLife',
    category: 'Electronics',
    imageUrl: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '16',
    name: 'Premium Coffee Beans',
    description: 'Organic, fair-trade coffee beans sourced from high-altitude farms. Medium roast with notes of chocolate, caramel, and a hint of citrus. Perfect for pour-over or French press.',
    price: 24.99,
    brand: 'MountainBrew',
    category: 'Home & Kitchen',
    imageUrl: 'https://images.pexels.com/photos/585751/pexels-photo-585751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '17',
    name: 'Children\'s Educational Toy Set',
    description: 'STEM-focused toy set for children ages 6-12. Includes building blocks, simple circuits, and an activity guide to encourage creativity and learning through play.',
    price: 59.99,
    brand: 'LearningToys',
    category: 'Toys',
    imageUrl: 'https://images.pexels.com/photos/163696/toy-car-toy-box-mini-163696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '18',
    name: 'Premium Yoga Mat',
    description: 'Extra-thick, non-slip yoga mat made from eco-friendly materials. Perfect balance of cushioning and stability for all types of yoga practice, with included carrying strap.',
    price: 69.99,
    brand: 'ZenFlex',
    category: 'Sports',
    imageUrl: 'https://images.pexels.com/photos/4498576/pexels-photo-4498576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '19',
    name: 'Winter Knit Beanie',
    description: 'Warm knit beanie made from soft acrylic yarn with fleece lining. One-size-fits-most design in multiple color options to complement any winter wardrobe.',
    price: 19.99,
    brand: 'WinterStyle',
    category: 'Clothing',
    imageUrl: 'https://images.pexels.com/photos/3568902/pexels-photo-3568902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '20',
    name: 'Portable Bluetooth Speaker',
    description: 'Compact Bluetooth speaker with surprisingly powerful sound. Waterproof design makes it perfect for outdoor use, with 12-hour battery life and built-in microphone for calls.',
    price: 89.99,
    brand: 'SoundMax',
    category: 'Electronics',
    imageUrl: 'https://images.pexels.com/photos/191877/pexels-photo-191877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '21',
    name: 'Artisanal Chocolate Gift Box',
    description: 'Luxury assortment of handcrafted chocolates using premium ingredients and traditional techniques. The perfect gift for chocolate lovers or a special treat for yourself.',
    price: 44.99,
    brand: 'SweetLuxe',
    category: 'Home & Kitchen',
    imageUrl: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '22',
    name: 'Luxury Scented Candle',
    description: 'Hand-poured soy wax candle with essential oil fragrance. Long-burning formula in an elegant glass container, perfect for creating a relaxing atmosphere.',
    price: 29.99,
    brand: 'Aromatic',
    category: 'Home & Kitchen',
    imageUrl: 'https://images.pexels.com/photos/4195348/pexels-photo-4195348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '23',
    name: 'Stainless Steel Knife Set',
    description: 'Professional-grade knife set including chef\'s knife, bread knife, utility knife, and paring knife. High-carbon stainless steel with ergonomic handles and a wooden storage block.',
    price: 159.99,
    brand: 'KitchenPro',
    category: 'Home & Kitchen',
    imageUrl: 'https://images.pexels.com/photos/9464444/pexels-photo-9464444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '24',
    name: 'Anti-Aging Serum',
    description: 'Powerful anti-aging serum with vitamin C, hyaluronic acid, and peptides. Reduces fine lines, improves skin texture, and boosts radiance with consistent use.',
    price: 59.99,
    brand: 'NaturalGlow',
    category: 'Beauty',
    imageUrl: 'https://images.pexels.com/photos/6311641/pexels-photo-6311641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];