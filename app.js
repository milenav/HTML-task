
$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        breakpoints: {
            440: {
                slidesPerView: 1,
                spaceBetweenSlides: 0
            },
            // when window width is <= 576px
            576: {
                slidesPerView: 1,
                spaceBetweenSlides: 0
            },
                // when window width is <= 768px
                768: {
                    slidesPerView: 2,
                    spaceBetweenSlides: 10
                },
                // when window width is <= 992px
                992: {
                    slidesPerView: 3,
                    spaceBetweenSlides: 30
                }
        }
    });
  
    $('ul.navbar-nav > li').click(function(e) {
      e.preventDefault();
      $('ul.navbar-nav > li').removeClass('active');
      $(this).addClass('active');
    });
  });