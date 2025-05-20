document.addEventListener('DOMContentLoaded', function () {

    // Navigation tab switching

    const navLinks = document.querySelectorAll('.account-menu li a');

    const contentSections = document.querySelectorAll('.account-content > section');

    navLinks.forEach(link => {

        link.addEventListener('click', function (e) {

            e.preventDefault();

            // Update active class

            navLinks.forEach(nav => nav.parentElement.classList.remove('active'));

            this.parentElement.classList.add('active');

            // Show corresponding section

            const target = this.getAttribute('href').substring(1); // remove #

            contentSections.forEach(section => {

                if (section.id === target) {

                    section.style.display = 'block';

                } else {

                    section.style.display = 'none';

                }

            });

        });

    });

    // Trigger click on first link by default

    if (navLinks.length > 0) {

        navLinks[0].click();

    }

    // Avatar change preview

    const avatarInput = document.getElementById('avatar-upload');

    const avatarImg = document.querySelector('.account-avatar img');

    if (avatarInput && avatarImg) {

        avatarInput.addEventListener('change', function () {

            const file = this.files[0];

            if (file && file.type.startsWith('image/')) {

                const reader = new FileReader();

                reader.onload = function (e) {

                    avatarImg.src = e.target.result;

                };

                reader.readAsDataURL(file);

            }

        });

    }

    // Delete confirmation for wishlist, addresses, etc.

    document.body.addEventListener('click', function (e) {

        if (e.target.matches('.remove-wishlist, .delete-address, .delete-method')) {

            const confirmed = confirm('Are you sure you want to delete this item?');

            if (!confirmed) {

                e.preventDefault();

            }

        }

    });

    // Optional: Toggle menu for mobile

    const menuToggle = document.querySelector('.menu-toggle');

    const sidebar = document.querySelector('.account-sidebar');

    if (menuToggle && sidebar) {

        menuToggle.addEventListener('click', function () {

            sidebar.classList.toggle('active');

        });

    }

});