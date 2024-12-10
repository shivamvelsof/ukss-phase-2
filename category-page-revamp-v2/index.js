function handleReadMoreBtn() {
  const categoryContent = document.querySelector(".category-content");
  if (categoryContent.scrollHeight > categoryContent.clientHeight) {
    $(".toggle-category-content-btn").removeClass("hide");
  } else {
    $(".toggle-category-content-btn").addClass("hide");
  }
}

$(document).ready(function () {
  function handleTabsArrow() {
    const scrollWidth = this.scrollWidth;
    const width = this.clientWidth;
    const left = this.scrollLeft;
    const right = scrollWidth - width - left;
    if (left < 1) {
      $(this)
        .parents(".tab-option-list-wrapper")
        .find(".tab-option-left-area")
        .addClass("hide");
    } else {
      $(this)
        .parents(".tab-option-list-wrapper")
        .find(".tab-option-left-area")
        .removeClass("hide");
    }
    if (right < 1) {
      $(this)
        .parents(".tab-option-list-wrapper")
        .find(".tab-option-right-area")
        .addClass("hide");
    } else {
      $(this)
        .parents(".tab-option-list-wrapper")
        .find(".tab-option-right-area")
        .removeClass("hide");
    }
  }
  $(".tab-options-list").each(handleTabsArrow);
  window.addEventListener("resize", function () {
    $(".tab-options-list").each(handleTabsArrow);
  });
  $(".tab-options-list").on("scroll", handleTabsArrow);
  $(".tab-option-left").click(function () {
    $(this)
      .parents(".tab-option-list-wrapper")
      .find(".tab-options-list")
      .animate({
        scrollLeft: "-=200",
      });
  });
  $(".tab-option-right").click(function () {
    $(this)
      .parents(".tab-option-list-wrapper")
      .find(".tab-options-list")
      .animate({
        scrollLeft: "+=200",
      });
  });
  $(".category-banner-slider .circular-card").click(function (e) {
    e.preventDefault();
    $(".category-banner-slider .circular-card").removeClass("active");
    $(this).addClass("active");
  });
  handleReadMoreBtn();
  function updateDropdownPosition($button, $dropdown, $megaDropdown) {
    const buttonRect = $button[0].getBoundingClientRect();
    const dropdownWidth = $dropdown.outerWidth();
    const megaDropdownWidth = $megaDropdown.outerWidth();
    const viewportWidth = $(window).width();

    // Calculate initial left and top position
    let left = buttonRect.left;
    let top = buttonRect.bottom; // Position beneath the button

    // Adjust to prevent cropping from the left
    if (left < 0) {
      left = 0;
    }

    // Adjust to prevent cropping from the right
    if (left + dropdownWidth > viewportWidth) {
      left = viewportWidth - dropdownWidth;
    }
    if (left + megaDropdownWidth > viewportWidth) {
      left = viewportWidth - megaDropdownWidth;
    }

    // Apply the calculated positions
    $dropdown.css({
      left: left + "px",
      top: top + 5 + "px",
    });
    $megaDropdown.css({
      left: left + "px",
      top: top + 5 + "px",
    });
  }

  $("[data-filter-dropdown-target]").on("click", function () {
    const $button = $(this);
    const dropdownId = $button.data("filter-dropdown-target");
    const $dropdown = $(`[data-filter-dropdown-id="${dropdownId}"]`);
    const $megaDropdown = $(`[data-filter-dropdown-id="all-${dropdownId}"]`);
    const isVisible = $dropdown.is(":visible");

    // Hide all dropdowns before toggling the current one
    $("[data-filter-dropdown-id]").hide();
    $("[data-filter-dropdown-target]").removeClass("active-filter");

    if (!isVisible) {
      updateDropdownPosition($button, $dropdown, $megaDropdown);
      $dropdown.show();
      $button.addClass("active-filter");
    }
  });

  // Update dropdown positions on window resize
  function handleDropdownPosition() {
    $("[data-filter-dropdown-id]:visible").each(function () {
      const $dropdown = $(this);
      const dropdownIdVal = $dropdown.attr("data-filter-dropdown-id");
      const dropdownId = dropdownIdVal.startsWith("all-")
        ? dropdownIdVal.slice(4)
        : dropdownIdVal;
      const $button = $(`[data-filter-dropdown-target="${dropdownId}"]`);
      const $megaDropdown = $(`[data-filter-dropdown-id="all-${dropdownId}"]`);
      updateDropdownPosition($button, $dropdown, $megaDropdown);
    });
  }

  addEventListener("resize", handleDropdownPosition);
  addEventListener("scroll", handleDropdownPosition);

  // Close dropdowns on clicking outside
  $(document).on("click", function (e) {
    if (
      !$(e.target).closest(
        "[data-filter-dropdown-target], [data-filter-dropdown-id]"
      ).length
    ) {
      $("[data-filter-dropdown-id]").hide();
      $("[data-filter-dropdown-target]").removeClass("active-filter");
    }
  });

  $(".show-more-filter-btn").click(function () {
    const target = $(this).data("mega-filter-target");
    $("[data-filter-dropdown-id]").hide();
    $(`[data-filter-dropdown-id="${target}"]`).show();
  });

  /**
   * CLOSE MEGA DROPDOWN BUTTON
   */
  $(".filter-mega-close button").click(function () {
    $(this).parents(".filter-mega-dropdown").hide();
    $("[data-filter-dropdown-target]").removeClass("active-filter");
  });

  /**
   * INPUT CHECKBOX CHANGE FOR FILTER
   */
  $("[data-filter-option]").change(function () {
    const target = $(this).data("filter-option");
    const isChecked = $(this).is(":checked");
    const chipText = $(this).parents("label").find(".opt-label-title").text();
    $(`[data-filter-option="${target}"]`)
      .not(this)
      .prop("checked", $(this).prop("checked"));
    if (isChecked) {
      $("#selected-filter-chips").append(`
            <li>
                <div class="selected-filter-item">
                    <span class="selected-filter-name">${chipText}</span>
                    <button type="button" class="remove-selected-filter" data-chip-id="${target}">&times;</button>
                </div>
            </li>
        `);
    } else {
      $("#selected-filter-chips")
        .find(`[data-chip-id="${target}"]`)
        .parents("li")
        .remove();
    }
  });

  /**
   * REMOVE SELECTED FILTER FROM USING CHIPS
   */
  $(document).on("click", ".remove-selected-filter", function () {
    const target = $(this).data("chip-id");
    $(`[data-filter-option="${target}"]`).prop("checked", false);
    $(this).parents("li").remove();
  });

  /**
   * SEARCH FILTER OPTION IN MEGA DROPDOWN
   */
  $('.filter-mega-search input[type="text"]').on("keyup", function () {
    const value = $(this).val().toLowerCase();
    const filterList = $(this)
      .parents(".filter-mega-dropdown")
      .find(".filter-mega-option-list");
    if (value) {
      $(filterList).find("li.filter-mega-option-heading").hide();
      $(filterList)
        .find("li.filter-mega-option-item")
        .each(function () {
          const text = $(this).text().toLowerCase();
          if (text.includes(value)) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });
    } else {
      $(filterList).find("li").show();
    }
  });

  /**
   * ALPHABETICAL SORTING OF FILTER OPTIONS
   */
  $(".aplhabets-filter button").click(function () {
    const filterList = $(this)
      .parents(".filter-mega-dropdown")
      .find(".filter-mega-option-list");
    if ($(this).hasClass("active-alphabet")) {
      $(this).removeClass("active-alphabet");
      $(filterList).find("li").show();
    } else {
      $(".aplhabets-filter button").removeClass("active-alphabet");
      $(this).addClass("active-alphabet");
      const targetValue = $(this).text().toLowerCase();
      $(filterList)
        .find("li")
        .each(function () {
          const text = $(this).text().toLowerCase().trim(" ");
          console.log("text", text);
          if (text.startsWith(targetValue)) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });
    }
  });
});
