$(document).ready(function () {
  $("[data-mobile-main]").click(function () {
    $("[data-mobile-main]").removeClass("active");
    $(this).addClass("active");
  });
});
