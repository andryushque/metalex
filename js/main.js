$(document).ready(function () {
  /*=== Mobile Menu ===*/
  var mmenuButton = $(".mmenu");
  mmenuButton.on("click", function () {
    mmenuButton.toggleClass("active");
    $(".nav").toggleClass("nav--hidden");
  });

  /*=== Fixed header ===*/
  var headerOffsetTop = $(".header").height() + 200;
  function fixHeaderOnTop() {
    if ($(".header").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= headerOffsetTop) {
          $(".header").addClass("header--fixed");
          $(".header").removeClass("header--bg");
        } else {
          $(".header").removeClass("header--fixed");
          $(".header").addClass("header--bg");
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
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  /*=== Smooth Scrolling to Anchor ===*/
  // Select all links with hashes and remove not anchor links
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // Hide mobile menu on scrolling
      if ($(".mmenu").hasClass("active")) {
        $(".mmenu").removeClass("active");
      }
      if (!$(".nav").hasClass("nav--hidden")) {
        $(".nav").addClass("nav--hidden");
      }
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});
