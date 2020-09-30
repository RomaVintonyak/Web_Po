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
    //var month = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.5));
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    //document.getElementById("timerMonth").innerHTML = month;
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
  //rotate img in about us section
  var cardItem = $(".rotateHover");
  cardItem.mousemove(srartRotate);
    function srartRotate(event){
    //position lelement in page
    var pos = $(this).offset();
    var elem_left = pos.left;
    var elem_top = pos.top;
    // position cursor in element
    var Xinner = event.pageX - elem_left;
    var Yinner = event.pageY - elem_top;
    // find half width & higth element
    var halfHeight = cardItem.innerHeight() / 2;
    var halfWidht = cardItem.innerWidth() / 2;
    //add css style to element
    $(this).css({
      "transform": 'rotateX('+ -(Yinner - halfHeight) / 100 + 'deg) rotateY('+ -(Xinner - halfWidht) / 100 + 'deg)'
     });
    }
     //remove css style
  cardItem.mouseleave(stopRotate);
  function stopRotate(event){
  $(this).css({
    "transform":"rotate(0deg)",
  });
}
});
