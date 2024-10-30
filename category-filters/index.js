$(document).ready(function () {
  /* SORT MODAL */
  $(".sort-by-area").click(function () {
    $(".mobile-sort-modal,.mobile-sort-modal__overlay").addClass("active");
  });
  $(".sort-modal-close-btn,.mobile-sort-modal__overlay").click(function () {
    $(".mobile-sort-modal,.mobile-sort-modal__overlay").removeClass("active");
  });
  $('.sort-option-wrapper input[type="radio"]').change(function () {
    const value = $(this).attr("data-title");
    $(".mobile-sort-modal,.mobile-sort-modal__overlay").removeClass("active");
    $(".sort-by-area .filter-value").text(value);
  });
  /* /SORT MODAL */

  /* FILTER MODAL */
  $(".filter-area").click(function () {
    $(".mobile-filters-modal").addClass("active");
  });
  $(".mf-close-filter-btn,.mf-apply-filter-btn").click(function () {
    $(".mobile-filters-modal").removeClass("active");
  });
  $("[data-filterkey]").click(function () {
    const target = $(this).data("filterkey");
    $("[data-filterkey]").removeClass("active");
    $(this).addClass("active");
    $("[data-filter-content]").removeClass("active");
    $(`[data-filter-content="${target}"]`).addClass("active");
  });
  // CHECKBOX
  $("[data-filter-content] .mf-filter-option-list .mf-checkbox").change(
    function () {
      const target = $(this)
        .parents("[data-filter-content]")
        .data("filter-content");
      const selectedFilters = $(this)
        .parents("[data-filter-content]")
        .find(".mf-filter-option-list")
        .find(".mf-checkbox:checked").length;
      $(`[data-filterkey="${target}"]`)
        .find(".mf-filter-count")
        .html(selectedFilters || "");
      showLoader();
      setTimeout(removeLoader, 500);
      getNumberOfSelectedFilters();
    }
  );
  // SEARCH BAR
  document
    .querySelectorAll(".mf-filters-search-area .mf-search")
    .forEach(function (element) {
      element.addEventListener("input", function () {
        const value = element.value.toLowerCase();
        const filterOptionItem = $(this)
          .parents(".mf-filters-option-wrapper")
          .find(".mf-filter-option-list > li");
        filterOptionItem.each(function () {
          if (this.innerText.toLowerCase().includes(value)) {
            this.style.display = "";
          } else {
            this.style.display = "none";
          }
        });
      });
    });
  function showLoader() {
    $(".mf-loader").addClass("active");
  }
  function removeLoader() {
    $(".mf-loader").removeClass("active");
  }
  function getNumberOfSelectedFilters() {
    let counter = 0;
    $(".mf-filter-option-list").each(function () {
      $(this)
        .find(".mf-checkbox")
        .each(function () {
          if ($(this).is(":checked")) {
            counter++;
          }
        });
    });
    $(".applied-filter-count").html(counter);
    if (counter > 0) {
      $(".applied-filter-count").addClass("active");
      $(".mf-clear-all").addClass("active");
    } else {
      $(".applied-filter-count").removeClass("active");
      $(".mf-clear-all").removeClass("active");
    }
  }
  $(".mf-clear-all").click(function () {
    $(".mf-checkbox").prop("checked", false).trigger("change");
  });
  /* /FILTER MODAL */
});
