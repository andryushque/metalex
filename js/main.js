$(document).ready(function () {
  /*=== Mobile Menu ===*/
  var mmenuButton = $(".mmenu");
  mmenuButton.on("click", function () {
    mmenuButton.toggleClass("active");
    $(".nav").toggleClass("nav--hidden");
  });

  /*=== Fixed header ===*/
  var headerOffsetTop = $(".header").height() + 90;
  function fixHeaderOnTop() {
    if ($(".header").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= headerOffsetTop) {
          $(".header").addClass("header--fixed");
          $(".header").removeClass("header-bg");
        } else {
          $(".header").removeClass("header--fixed");
          $(".header").addClass("header-bg");
        }
      });
    }
  }
  fixHeaderOnTop();

  /*=== To Top Button ===*/
  var btn = $(".top-button");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});
