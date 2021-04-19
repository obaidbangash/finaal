$( document ).ready(function() {
   $('.mobile-btn').click(function(){
       $('body').toggleClass('overlay')
       
   $('header .mobile-log span i').click(function(){
       $('header .navbar-collapse').removeClass('show');
       $('body').removeClass('overlay');

   })

   })
   $('.slider-recipe').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-recipe',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
  });
    $('.similar-products-slider').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 641,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
      ]
    });
  
});

