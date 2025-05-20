// Mobile Menu Toggle

document.addEventListener('DOMContentLoaded', function() {

    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');

    const mainNav = document.querySelector('.main-nav');

    mobileMenuToggle.addEventListener('click', function() {

        mainNav.classList.toggle('active');

    });

    // Load featured products

    loadFeaturedProducts();

    // Initialize cart count

    updateCartCount();

});

// Product Data

const products = [

    {

        id: 1,

        title: "Wireless Bluetooth Headphones",

        price: 79.99,

        oldPrice: 99.99,

        image: "images/product1.jpg",

        rating: 4,

        badge: "Sale"

    },

    {

        id: 2,

        title: "Smart Watch Fitness Tracker",

        price: 129.99,

        image: "images/product2.jpg",

        rating: 5,

        badge: "New"

    },

    {

        id: 3,

        title: "Portable Bluetooth Speaker",

        price: 49.99,

        oldPrice: 59.99,

        image: "images/product3.jpg",

        rating: 4

    },

    {

        id: 4,

        title: "Wireless Charging Pad",

        price: 29.99,

        image: "images/product4.jpg",

        rating: 3

    },

    {

        id: 5,

        title: "Noise Cancelling Headphones",

        price: 199.99,

        image: "images/product5.jpg",

        rating: 5,

        badge: "Popular"

    },

    {

        id: 6,

        title: "Smart Home Security Camera",

        price: 89.99,

        oldPrice: 109.99,

        image: "images/product6.jpg",

        rating: 4

    },

    {

        id: 7,

        title: "Ultra HD 4K Smart TV",

        price: 799.99,

        image: "images/product7.jpg",

        rating: 5

    },

    {

        id: 8,

        title: "Gaming Laptop",

        price: 1299.99,

        oldPrice: 1499.99,

        image: "images/product8.jpg",

        rating: 5,

        badge: "Hot"

    }

];

// Load Featured Products

function loadFeaturedProducts() {

    const productGrid = document.querySelector('.product-grid');

    

    if (productGrid) {

        productGrid.innerHTML = '';

        

        // Display first 6 products as featured

        const featuredProducts = products.slice(0, 6);

        

        featuredProducts.forEach(product => {

            const productCard = document.createElement('div');

            productCard.className = 'product-card';

            

            let badgeHTML = '';

            if (product.badge) {

                badgeHTML = `<span class="product-badge">${product.badge}</span>`;

            }

            

            let oldPriceHTML = '';

            if (product.oldPrice) {

                oldPriceHTML = `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>`;

            }

            

            let ratingHTML = '';

            for (let i = 1; i <= 5; i++) {

                if (i <= product.rating) {

                    ratingHTML += '<i class="fas fa-star"></i>';

                } else {

                    ratingHTML += '<i class="far fa-star"></i>';

                }

            }

            

            productCard.innerHTML = `

                ${badgeHTML}

                <div class="product-img">

                    <img src="${product.image}" alt="${product.title}">

                </div>

                <div class="product-info">

                    <h3 class="product-title">${product.title}</h3>

                    <div class="product-price">

                        <span class="current-price">$${product.price.toFixed(2)}</span>

                        ${oldPriceHTML}

                    </div>

                    <div class="product-rating">

                        ${ratingHTML}

                    </div>

                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>

                </div>

            `;

            

            productGrid.appendChild(productCard);

        });

        

        // Add event listeners to "Add to Cart" buttons

        document.querySelectorAll('.add-to-cart').forEach(button => {

            button.addEventListener('click', function() {

                const productId = parseInt(this.getAttribute('data-id'));

                addToCart(productId);

            });

        });

    }

}

// Cart Functions

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {

    const product = products.find(p => p.id === productId);

    

    if (product) {

        const existingItem = cart.find(item => item.id === productId);

        

        if (existingItem) {

            existingItem.quantity += 1;

        } else {

            cart.push({

                id: product.id,

                title: product.title,

                price: product.price,

                image: product.image,

                quantity: 1

            });

        }

        

        updateLocalStorage();

        updateCartCount();

        

        // Show notification

        showNotification(`${product.title} added to cart`);

    }

}

function updateLocalStorage() {

    localStorage.setItem('cart', JSON.stringify(cart));

}

function updateCartCount() {

    const cartCount = document.querySelector('.cart-count');

    if (cartCount) {

        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

        cartCount.textContent = totalItems;

    }

}

function showNotification(message) {

    const notification = document.createElement('div');

    notification.className = 'notification';

    notification.textContent = message;

    document.body.appendChild(notification);

    

    setTimeout(() => {

        notification.classList.add('show');

    }, 10);

    

    setTimeout(() => {

        notification.classList.remove('show');

        setTimeout(() => {

            document.body.removeChild(notification);

        }, 300);

    }, 3000);

}

// Newsletter Form Submission

const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {

    newsletterForm.addEventListener('submit', function(e) {

        e.preventDefault();

        const emailInput = this.querySelector('input[type="email"]');

        const email = emailInput.value;

        

        // Here you would typically send this to your server

        console.log('Subscribed email:', email);

        showNotification('Thanks for subscribing!');

        emailInput.value = '';

    });

}