jQuery(document).ready(function () {
  "use script";
  /*initialized slick slider to intro block*/
  var introSlider = $("#introSlider");
  introSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    swipe: false,
    touchMove: false,
    focusOnSelect: false,
    fade: true
  });
});
