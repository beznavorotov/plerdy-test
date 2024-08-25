$(document).ready(function() {
  $('.responsive').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4, 
    slidesToScroll: 1,
    prevArrow: '.button_prev',
    nextArrow: '.button_next',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  });
});
