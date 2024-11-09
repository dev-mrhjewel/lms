"use strict";

(function($) {
    "use strict";

    $(window).scroll(function() {
        var window_top = $(window).scrollTop() + 1;

        if (window_top > 50) {
            $('.scroll-to-top').addClass('reveal');
        } else {
            $('.scroll-to-top').removeClass('reveal');
        }
    });

    //  Tetsimonial 1
    $('.testimonials-slides').owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        margin: 10,
        autoplayHoverPause: true,
        autoplay: true,
        center: true,
        responsiveClass: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    //  Testimonial -2
    $('.testimonials-slides-2').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        margin: 10,
        autoplayHoverPause: true,
        autoplay: false,
        responsiveClass: true,
        autoplayTimeout: 4000,
        navText: ["<i class='bi bi-arrow-left-rounded'></i>", "<i class='bi bi-arrow-right-rounded'></i>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

    //  Testimonial-3
    $('.testimonials-slides-3').owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        margin: 10,
        autoplayHoverPause: true,
        autoplay: false,
        responsiveClass: true,
        autoplayTimeout: 4000,
        center: true,
        navText: ["<i class='bi bi-arrow-left-rounded'></i>", "<i class='bi bi-arrow-right-rounded'></i>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    //  Course Slider 
    $('.course-slides').owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        margin: 10,
        autoplayHoverPause: true,
        autoplay: false,
        center: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    //  Course slider -2
    $('.course-slides-list').owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        margin: 10,
        autoplayHoverPause: true,
        autoplay: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    // Counter

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //  Team Slider
    $('.team-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: false,
        navRewind: false,
        margin: 30,
        navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // overlay search

    $('.search_toggle').on('click', function(e) {
        e.preventDefault();
        $('.search_toggle').toggleClass('active');
        $('.overlay').toggleClass('open');
        setTimeout(function() {
            $('.search-form .form-control').focus();
        }, 400);
    });


    /* ---------------------------------------------
           course filtering
      --------------------------------------------- */

    var $course = $('.course-gallery');

    if ($.fn.imagesLoaded && $course.length > 0) {
        imagesLoaded($course, function() {
            $course.isotope({
                itemSelector: '.course-item',
                filter: '*'
            });
            $(window).trigger("resize");
        });
    }

    $('.course-filter').on('click', 'a', function(e) {
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
        var filterValue = $(this).attr('data-filter');
        $course.isotope({
            filter: filterValue
        });
    });

    /* ---------------------------------------------
           Contact Form
    --------------------------------------------- */

    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data; // Success function

    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function() {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    } // fail function


    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function() {
            message.fadeOut();
        }, 2000);
    }

    form.submit(function(e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        }).done(done_func).fail(fail_func);
    });



    /*
     * ----------------------------------------------------------------------------------------
     *  SMOTH SCROOL JS
     * ----------------------------------------------------------------------------------------
     */

    $('a.js-scroll-trigger').on('click', function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 100
        }, 1000);
        e.preventDefault();
    });

    /* ----------------------------------------------------------- */
    /*  Fixed header
    /* ----------------------------------------------------------- */

    $(window).scroll(function() {
        var window_top = $(window).scrollTop() + 1;
        if (window_top > 50) {
            $('.site-navigation').addClass('menu_fixed animated fadeInDown');
        } else {
            $('.site-navigation').removeClass('menu_fixed animated fadeInDown');
        }
    });


})(jQuery);