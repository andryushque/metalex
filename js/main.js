$(document).ready(function () {
  /*=== Mobile Menu ===*/
  var mmenuButton = $(".mmenu");
  mmenuButton.on("click", function () {
    mmenuButton.toggleClass("active");
    $(".nav").toggleClass("nav--hidden");
  });

  /*=== Fixed header ===*/
  let navOffsetTop = $(".header").height() + 50;

  function fixNavbarOnTop() {
    if ($(".header").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= navOffsetTop) {
          $(".header").addClass("header--fixed");
          $(".header").removeClass("header-bg");
        } else {
          $(".header").removeClass("header--fixed");
          $(".header").addClass("header-bg");
        }
      });
    }
  }

  fixNavbarOnTop();
});
