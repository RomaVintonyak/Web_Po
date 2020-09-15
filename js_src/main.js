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
    












  /*var target_date = new Date().getTime() + 1000 * 3600 * 48; // установить дату обратного отсчета
  var days, hours, minutes, seconds; // переменные для единиц времени

  var countdown = document.getElementById("timerMonth"); // получить элемент тега

  getCountdown();

  setInterval(function () {
    getCountdown();
  }, 1000);

  function getCountdown() {
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    days = pad(parseInt(seconds_left / 86400));
    seconds_left = seconds_left % 86400;

    hours = pad(parseInt(seconds_left / 3600));
    seconds_left = seconds_left % 3600;

    minutes = pad(parseInt(seconds_left / 60));
    seconds = pad(parseInt(seconds_left % 60));

    // строка обратного отсчета  + значение тега
    countdown.innerHTML =
      "<span>" +
      days +
      "</span><span>" +
      hours +
      "</span><span>" +
      minutes +
      "</span><span>" +
      seconds +
      "</span>";
  }

  function pad(n) {
    return (n < 10 ? "0" : "") + n;
  }*/
});
