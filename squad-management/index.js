$(document).ready(function () {
  const scrollableContainer = document.querySelector(
    ".category-banner-tags-list"
  );
  const scrollableContainerWrapper = document.querySelector(
    ".category-banner-tags-list-wrapper"
  );

  // function toggleShadows() {
  //   const { scrollLeft, scrollWidth, clientWidth } = scrollableContainer;

  //   // Show right shadow if not at the far-right end
  //   if (scrollLeft + clientWidth + 30 < scrollWidth) {
  //     scrollableContainerWrapper.classList.add("show-right-shadow");
  //   } else {
  //     scrollableContainerWrapper.classList.remove("show-right-shadow");
  //   }

  //   // Show left shadow if not at the far-left end
  //   if (scrollLeft > 0) {
  //     scrollableContainerWrapper.classList.add("show-left-shadow");
  //   } else {
  //     scrollableContainerWrapper.classList.remove("show-left-shadow");
  //   }
  // }

  function toggleShadows() {
    const { scrollLeft, scrollWidth } = scrollableContainer;
    const containerWidth = scrollableContainer.offsetWidth; // Actual width of the scrollable element

    // Small buffer to account for rounding issues or minor mismatches
    const buffer = 5;

    // Show right shadow if not at the far-right end
    if (scrollLeft + containerWidth + buffer < scrollWidth) {
      scrollableContainerWrapper.classList.add("show-right-shadow");
    } else {
      scrollableContainerWrapper.classList.remove("show-right-shadow");
    }

    // Show left shadow if not at the far-left end
    if (scrollLeft > buffer) {
      scrollableContainerWrapper.classList.add("show-left-shadow");
    } else {
      scrollableContainerWrapper.classList.remove("show-left-shadow");
    }
  }

  scrollableContainer.addEventListener("scroll", toggleShadows);

  // Run it initially to check position on page load
  toggleShadows();

  $(".toggle-category-content-btn").click(function () {
    const hasClass = $(".category-content").hasClass("read-more");
    if (hasClass) {
      $(".category-content").removeClass("read-more");
      $(this).text("Read less");
    } else {
      $(".category-content").addClass("read-more");
      $(this).text("Read more");
    }
  });

  $(".tab-option-btn").click(function () {
    const target = $(this).data("tab-target");
    $(this)
      .parents(".tab-options-list")
      .find(".tab-option-btn")
      .removeClass("active");
    $(this).addClass("active");
    $(this)
      .parents(".tab-products")
      .find(".tab-product-item")
      .removeClass("active");
    $(this)
      .parents(".tab-products")
      .find(`.tab-product-item[data-tab-wrapper="${target}"]`)
      .addClass("active");
  });

  $(".cart-action-add-btn,.size-dd").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
  });
  $(".color-wrapper label").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    const target = $(this).attr("for");
    $(`input#${target}`).click();
  });
});

addEventListener("DOMContentLoaded", () => {
  $(".category-banner-tags-list").scrollLeft(5000);
});

addEventListener("load", function () {
  $(".category-banner-tags-list").scrollLeft(0);
});

new Swiper(".cat-prod-swiper", {
  freeMode: !0,
  spaceBetween: 25,
  pagination: {
    el: ".cat-prod-swiper-pagination",
    clickable: true,
  },
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

new Swiper(".category-banner-carousel", {
  spaceBetween: 0,
  slidesPerView: "auto",
  freeMode: !0,
  mousewheel: {
    invert: !1,
    forceToAxis: !0,
    releaseOnEdges: !0,
  },
});
