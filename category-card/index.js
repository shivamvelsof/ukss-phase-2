$(document).ready(function () {
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
