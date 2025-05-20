document.addEventListener('DOMContentLoaded', function() {

    // Image gallery functionality

    const thumbnails = document.querySelectorAll('.thumbnail');

    const mainImage = document.getElementById('mainImage');

    

    thumbnails.forEach(thumbnail => {

        thumbnail.addEventListener('click', function() {

            // Remove active class from all thumbnails

            thumbnails.forEach(t => t.classList.remove('active'));

            

            // Add active class to clicked thumbnail

            this.classList.add('active');

            

            // Change main image

            const newImageSrc = this.getAttribute('data-image');

            mainImage.src = newImageSrc;

        });

    });

    

    // Color selection

    const colorOptions = document.querySelectorAll('.color-option');

    colorOptions.forEach(option => {

        option.addEventListener('click', function() {

            colorOptions.forEach(o => o.classList.remove('active'));

            this.classList.add('active');

        });

    });

    

    // Quantity selector

    const quantityInput = document.querySelector('.quantity-selector input');

    const minusBtn = document.querySelector('.quantity-btn.minus');

    const plusBtn = document.querySelector('.quantity-btn.plus');

    

    minusBtn.addEventListener('click', function() {

        let value = parseInt(quantityInput.value);

        if (value > 1) {

            quantityInput.value = value - 1;

        }

    });

    

    plusBtn.addEventListener('click', function() {

        let value = parseInt(quantityInput.value);

        quantityInput.value = value + 1;

    });

    

    // Tab functionality

    const tabNavItems = document.querySelectorAll('.tab-nav li');

    const tabContents = document.querySelectorAll('.tab-content');

    

    tabNavItems.forEach(item => {

        item.addEventListener('click', function() {

            const tabId = this.getAttribute('data-tab');

            

            // Update tab navigation

            tabNavItems.forEach(i => i.classList.remove('active'));

            this.classList.add('active');

            

            // Update tab content

            tabContents.forEach(content => {

                content.classList.remove('active');

                if (content.id === tabId) {

                    content.classList.add('active');

                }

            });

        });

    });

    

    // Rating stars

    const ratingStars = document.querySelectorAll('.rating-input i');

    const ratingValue = document.getElementById('rating-value');

    

    ratingStars.forEach(star => {

        star.addEventListener('click', function() {

            const rating = parseInt(this.getAttribute('data-rating'));

            ratingValue.value = rating;

            

            // Update star display

            ratingStars.forEach((s, index) => {

                if (index < rating) {

                    s.classList.remove('far');

                    s.classList.add('fas');

                } else {

                    s.classList.remove('fas');

                    s.classList.add('far');

                }

            });

        });

    });

    

    // Add to cart button

    const addToCartBtn = document.querySelector('.add-to-cart-btn');

    if (addToCartBtn) {

        addToCartBtn.addEventListener('click', function() {

            const quantity = parseInt(quantityInput.value);

            const selectedColor = document.querySelector('.color-option.active').getAttribute('data-color');

            

            // In a real app, you would add the selected product to cart

            // For demo, we'll just show a notification

            showNotification(`Added ${quantity} item(s) (Color: ${selectedColor}) to cart`);

            

            // Update cart count

            updateCartCount();

        });

    }

});