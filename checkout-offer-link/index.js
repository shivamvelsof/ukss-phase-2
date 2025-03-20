$(document).ready(function () {
  $(".open-discount-code-field").click(function () {
    if ($("[data-text-mobile-content]").text() !== "Hide cart")
      $(".toggle-mobile-cart").click();
    $("#discountCode").focus();
  });
});
