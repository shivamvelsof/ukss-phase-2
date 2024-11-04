$(document).ready(function () {
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
});

const scrollableContainer = document.querySelector(".cat-scrollable-container");
const scrollableContainerWrapper = document.querySelector(".category-links-wrapper");

function toggleShadows() {
  const { scrollLeft, scrollWidth, clientWidth } = scrollableContainer;

  // Show right shadow if not at the far-right end
  if (scrollLeft + clientWidth < scrollWidth) {
    scrollableContainerWrapper.classList.add("show-right-shadow");
  } else {
    scrollableContainerWrapper.classList.remove("show-right-shadow");
  }

  // Show left shadow if not at the far-left end
  if (scrollLeft > 0) {
    scrollableContainerWrapper.classList.add("show-left-shadow");
  } else {
    scrollableContainerWrapper.classList.remove("show-left-shadow");
  }
}

scrollableContainer.addEventListener("scroll", toggleShadows);

// Run it initially to check position on page load
toggleShadows();
