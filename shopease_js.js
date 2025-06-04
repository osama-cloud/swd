// Sample product data
const products = [
    {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        price: 99.99,
        originalPrice: 149.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
        category: 'electronics',
        rating: 4.8,
        reviews: 1250,
        description: 'Premium noise-cancelling wireless headphones with 30-hour battery life.',
        discount: 33
    },
    {
        id: 2,
        name: 'Smart Fitness Watch',
        price: 199.99,
        originalPrice: 299.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
        category: 'electronics',
        rating: 4.6,
        reviews: 890,
        description: 'Advanced fitness tracking with heart rate monitor and GPS.',
        discount: 33
    },
    {
        id: 3,
        name: 'Designer Leather Handbag',
        price: 149.99,
        originalPrice: 249.99,
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop',
        category: 'fashion',
        rating: 4.9,
        reviews: 456,
        description: 'Elegant genuine leather handbag perfect for any occasion.',
        discount: 40
    },
    {
        id: 4,
        name: 'Modern Coffee Maker',
        price: 79.99,
        originalPrice: 119.99,
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
        category: 'home',
        rating: 4.7,
        reviews: 623,
        description: 'Programmable coffee maker with built-in grinder and thermal carafe.',
        discount: 33
    },
    {
        id: 5,
        name: 'Yoga Mat Premium',
        price: 39.99,
        originalPrice: 59.99,
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
        category: 'sports',
        rating: 4.5,
        reviews: 789,
        description: 'Non-slip eco-friendly yoga mat with carrying strap.',
        discount: 33
    },
    {
        id: 6,
        name: 'Wireless Phone Charger',
        price: 29.99,
        originalPrice: 49.99,
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
        category: 'electronics',
        rating: 4.4,
        reviews: 334,
        description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
        discount: 40
    },
    {
        id: 7,
        name: 'Stylish Sunglasses',
        price: 89.99,
        originalPrice: 129.99,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
        category: 'fashion',
        rating: 4.6,
        reviews: 567,
        description: 'UV protection polarized sunglasses with premium frame.',
        discount: 31
    },
    {
        id: 8,
        name: 'Smart Home Speaker',
        price: 79.99,
        originalPrice: 99.99,
        image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop',
        category: 'electronics',
        rating: 4.8,
        reviews: 1120,
        description: 'Voice-controlled smart speaker with premium sound quality.',
        discount: 20
    }
];

// Cart functionality
let cart = [];
let favorites = [];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    setupEventListeners();
});

function setupEventListeners() {
    // Search functionality