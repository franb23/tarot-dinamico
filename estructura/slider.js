$(document).ready(function () {
  $('.tarot-slider').addClass('slider-hidden');

  $('.tarot-slider').on('init', function () {
    $('.tarot-slider').removeClass('slider-hidden').addClass('slider-visible');
  });

  $('.tarot-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1200,
    arrows: true,
    dots: false,
    infinite: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0'
  });
});
