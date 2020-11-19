$('.slider .owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }

})

// $('.testimonials .owl-carousel').owlCarousel({
//     loop: true,
//     margin: 20,
//     nav: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 2
//         },
//         1000: {
//             items: 4
//         }
//     }

// })
// AOS.init();

// $(window).on('scroll', function () {
//     if ($(document).scrollTop() > 100) {
//         $('.navigation').addClass('move');
//     } else {
//         $('.navigation').removeClass('move');
//     }
// })

$('.hamburger').on('click', (event) => {
    $('.hamburger').toggleClass('is-active');
    $('body').toggleClass('menu-open');

})
