$(document).ready(function() {
    // Initialize Hero Product Slider
    $('.hero-product-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        pauseOnHover: true,
        cssEase: 'ease-in-out'
    });

    // Initialize Products Slider
    $('.products-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Initialize Background Slider
    $('.bg-slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true
    });

    // Initialize Team Slider
    $('.team-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Initialize Specs Sliders
    $('.specs-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true
    });

    // Tab Functionality
    $('.tab-btn').on('click', function() {
        var tabId = $(this).data('tab');

        // Remove active class from all tabs and contents
        $('.tab-btn').removeClass('active');
        $('.tab-content').removeClass('active');

        // Add active class to clicked tab and corresponding content
        $(this).addClass('active');
        $('#' + tabId).addClass('active');

        // Refresh slick slider after showing tab
        $('#' + tabId + ' .specs-slider').slick('setPosition');
    });

    // Mobile Menu Toggle
    $('.mobile-menu-btn').on('click', function() {
        $(this).toggleClass('active');
        $('.nav-list').toggleClass('active');
    });

    // Smooth Scroll for Navigation Links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);

            // Close mobile menu if open
            $('.nav-list').removeClass('active');
            $('.mobile-menu-btn').removeClass('active');
        }
    });

    // Scroll to Top Button
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 300) {
            $('#scrollTop').addClass('visible');
        } else {
            $('#scrollTop').removeClass('visible');
        }

        // Header shadow on scroll
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });

    // Scroll to Top Click
    $('#scrollTop').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    // Modal Functionality
    $('.team-member').on('click', function() {
        var modalId = $(this).data('modal');
        if (modalId) {
            $('#' + modalId).addClass('active');
            $('body').addClass('modal-open');
        }
    });

    $('.modal-close, .modal').on('click', function(e) {
        if (e.target === this) {
            $('.modal').removeClass('active');
            $('body').removeClass('modal-open');
        }
    });

    // Close modal on Escape key
    $(document).on('keyup', function(e) {
        if (e.key === 'Escape') {
            $('.modal').removeClass('active');
            $('body').removeClass('modal-open');
        }
    });

    // Contact Form Submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        var name = $(this).find('input[name="name"]').val();
        var email = $(this).find('input[name="email"]').val();
        var message = $(this).find('textarea[name="message"]').val();

        // Simple validation
        if (name && email && message) {
            // Here you would typically send the data to a server
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Active Navigation Link on Scroll
    $(window).on('scroll', function() {
        var scrollPosition = $(this).scrollTop();

        $('section[id]').each(function() {
            var target = $(this);
            var targetTop = target.offset().top - 100;
            var targetBottom = targetTop + target.outerHeight();
            var id = target.attr('id');

            if (scrollPosition >= targetTop && scrollPosition < targetBottom) {
                $('.nav-list li a').removeClass('active');
                $('.nav-list li a[href="#' + id + '"]').addClass('active');
            }
        });
    });

    // Animate elements on scroll
    function animateOnScroll() {
        $('.animate-on-scroll').each(function() {
            var elementTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < windowBottom - 50) {
                $(this).addClass('animated');
            }
        });
    }

    $(window).on('scroll', animateOnScroll);
    animateOnScroll(); // Run on page load
});

// Prevent body scroll when modal is open
$('body').on('touchmove', function(e) {
    if ($('body').hasClass('modal-open')) {
        e.preventDefault();
    }
});
