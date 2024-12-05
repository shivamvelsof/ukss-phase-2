$(document).ready(function () {
  const swiper = new Swiper(".why-buy-carousel", {
    loop: true,
    spaceBetween: 10,

    autoplay: {
      delay: 2000,
    },

    pagination: {
      el: ".why-buy-swiper",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      565: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });
});
