$(document).ready(function () {
  document
    .querySelector(".apply-promo-code-area .floating-input")
    .addEventListener("input", function () {
      if ($(this).val() === "") {
        $(this)
          .parents(".apply-promo-code-area")
          .find(".apply-promo-btn")
          .attr("disabled", true);
      } else {
        $(this)
          .parents(".apply-promo-code-area")
          .find(".apply-promo-btn")
          .attr("disabled", false);
      }
    });

  $(".add-sc-btn").click(function () {
    $(this)
      .parents(".suggestion-card")
      .find(".sc-select-size-wrapper")
      .addClass("show-size-dd");
  });
});
