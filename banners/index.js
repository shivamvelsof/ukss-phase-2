const swiper = new Swiper("#top-ukss-banner", {
  loop: true,
  spaceBetween: 10,

  autoplay: {
    delay: 1500,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    565: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
