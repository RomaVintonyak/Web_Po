jQuery(document).ready(function () {
  "use script";
  /*waves fect initialized*/
  Waves.attach(".waves-effect");
  Waves.init();
  /*wow init*/
  wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: false,
    live: true,
  });
  wow.init();
  /* burger button */
  $(".btn__burger").on("click", function (event) {
    event.preventDefault();
    var wWidth = $(window).width();
    if (wWidth <= 768) {
      $(this).find("span").toggleClass("open__button");
      $(".navbar__menu").toggleClass("mobile__menu");
    } else {
      $(".btn__burger").find("span").removeClass("open__button");
      $(".navbar__menu").removeClass("mobile__menu");
    }
  });
  /* smoth scroll to cat */
  var navLinks = $(".nav__link");
  navLinks.on("click", function (event) {
    event.preventDefault();
    var scrolId = $(this).attr("href");
    var scrolPos = $(scrolId).offset().top;
    $("html, body").animate(
      {
        scrollTop: scrolPos - 100,
      },
      1000
    );
  });
  /* load line */
  $(window).on("scroll resize", loadLineScroll);
  function loadLineScroll() {
    var wHeight = $(window).height();
    var dHeight = $(document).height();
    var scrollPosition = $(window).scrollTop();
    var scrollPercent = 100 * (scrollPosition / (dHeight - wHeight));
    var percentSt = Math.ceil(scrollPercent);
    $("#loadLine").css({
      width: percentSt + "%",
    });
  }
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
  var deadLine = new Date("2021-02-20").getTime();
  var timer = setInterval(function () {
    var now = new Date().getTime();
    var distance = deadLine - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    document.getElementById("timerDays").innerHTML = days;
    document.getElementById("timerHours").innerHTML = hours;
    document.getElementById("timerMinutes").innerHTML = minutes;
    document.getElementById("timerSeconds").innerHTML = seconds;
    // If the deadLine is finished, write some text
    if (distance < 0) {
      clearInterval(timer);
      var mesag = "Подія відбулася. Дякуємо що завітали.";
      alert(mesag);
    }
  }, 1000);
  /*fixed header*/
  var headerBar = $("#header");
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
  function srartRotate(event) {
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
      transform:
        "rotateX(" +
        -(Yinner - halfHeight) / 100 +
        "deg) rotateY(" +
        -(Xinner - halfWidht) / 100 +
        "deg)",
    });
  }
  //remove css style
  cardItem.mouseleave(stopRotate);
  function stopRotate() {
    $(this).css({
      transform: "rotate(0deg)",
    });
  }
  /*initialized slick slider to loveline block*/
  var loveSlider = $("#loveSlider");
  loveSlider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    swipe: false,
    touchMove: false,
    focusOnSelect: false,
    fade: false,
  });
  //controll slider loveline
  $("#lovelinePrev").on("click", function () {
    var curentItem = $(this).parent(".loveline__row").find("#loveSlider");
    curentItem.slick("slickPrev");
  });
  $("#lovelineNext").on("click", function () {
    var curentItem = $(this).parent(".loveline__row").find("#loveSlider");
    curentItem.slick("slickNext");
  });
  /* scroll top btn */
  var scrollTopBtn = $("#topBtn");
  var introH = $("#intro").height();
  scrollTopBtn.fadeOut("fast");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > introH) {
      scrollTopBtn.fadeIn(700);
      scrollTopBtn.css({
        bottom: "0",
      });
    } else {
      scrollTopBtn.fadeOut(1500);
      scrollTopBtn.css({
        bottom: "-50px",
      });
    }
  });
  scrollTopBtn.on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
