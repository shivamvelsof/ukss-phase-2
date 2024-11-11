new Swiper(".circular-cat-swiper", {
  freeMode: !0,
  scrollbar: {
    el: ".circular-cat-swiper-scrollbar",
    draggable: !0,
  },
  mousewheel: {
    invert: !1,
    forceToAxis: !0,
    releaseOnEdges: !0,
  },
  breakpoints: {
    0: {
      slidesPerView: 2.5,
    },
    320: {
      slidesPerView: 4.2,
    },
    400: {
      slidesPerView: 4.2,
    },
    565: {
      slidesPerView: 5.5,
    },
    767: {
      slidesPerView: 7.5,
    },
    992: {
      slidesPerView: 10.5,
      spaceBetween: 10,
    },
  },
});
