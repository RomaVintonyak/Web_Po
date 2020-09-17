jQuery(document).ready(function () {
  "use script";
  /*initialized slick slider to intro block*/
  var introSlider = $("#introSlider");
  introSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    swipe: false,
    touchMove: false,
    focusOnSelect: false,
    fade: true,
  });
  /*intro timer*/
  var deadLine = new Date("2020-11-23").getTime();
  var timer = setInterval(function () {
    var now = new Date().getTime();
    var distance = deadLine - now;
    // Time calculations for days, hours, minutes and seconds
    var month = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.5));
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    document.getElementById("timerMonth").innerHTML = month;
    document.getElementById("timerDays").innerHTML = days;
    document.getElementById("timerHours").innerHTML = hours;
    document.getElementById("timerMinutes").innerHTML = minutes;
    document.getElementById("timerSeconds").innerHTML = seconds;
    // If the deadLine is finished, write some text
    if (distance < 0) {
      clearInterval(timer);
      var mesag = "just married";
      alert(mesag);
    }
  }, 1000);
  /*fixed header*/
  var headerBar = $("#header");
  var headerHeight = headerBar.innerHeight();
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 1) {
      headerBar.addClass("fixed__header");
    } else {
      headerBar.removeClass("fixed__header");
    }
  });
});
