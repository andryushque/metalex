$(document).ready(function () {
  /*=== Mobile Menu ===*/
  var mmenuButton = $(".mmenu");
  mmenuButton.on("click", function () {
    mmenuButton.toggleClass("active");
    $(".nav").toggleClass("nav--hidden");
  });
});
