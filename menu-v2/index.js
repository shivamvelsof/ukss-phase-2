$(document).ready(function () {
  $("#toggle_mobile_menu").click(function () {
    $(".mobile-menu,.mobile-menu-overlay").addClass("active");
  });
  $(".mobile-menu-close-btn,.mobile-menu-overlay").click(function () {
    $(".mobile-menu,.mobile-menu-overlay").removeClass("active");
  });
  $("#mobile-menu-search").click(function () {
    $(".inMenu-search").addClass("active");
    $(".inMenu-input-search").focus();
  });
  $(".inMenu-search-close-btn").click(function () {
    $(".inMenu-search").removeClass("active");
  });
  $("[data-mobile-main]").click(function () {
    const target = $(this).data("mobile-main");
    $("[data-mobile-main]").removeClass("active");
    $(this).addClass("active");
    $("[data-catalog]").removeClass("active");
    $(`[data-catalog="${target}"]`).addClass("active");
  });
  $("[data-has-nested-menu],.has-nested-menu").click(function () {
    $(this).next(".nested-menu").addClass("active");
  });
  $(".nested-menu-header-title").click(function () {
    $(this)
      .parent(".nested-menu-header")
      .parent(".nested-menu")
      .removeClass("active");
  });
  $(".nested-menu-close-btn").click(function () {
    $(".mobile-menu,.mobile-menu-overlay,.nested-menu").removeClass("active");
  });

  new Swiper(".inMenu-swiper-product-carousel", {
    freeMode: !0,
    mousewheel: {
      invert: !1,
      forceToAxis: !0,
      releaseOnEdges: !0,
    },
    spaceBetween: 10,
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 2.4,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 2.7,
        spaceBetween: 10,
      },
      565: {
        slidesPerView: 3.4,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 3.7,
      },
      992: {
        slidesPerView: 4.5,
      },
    },
  });
});
