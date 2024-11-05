$(document).ready(function () {
  $("[data-show-result]").hover(function () {
    let target = $(this).data("show-result");
    $("[data-show-result]").removeClass("active");
    $(this).addClass("active");
    $("[data-result-id]").removeClass("show");
    $(`[data-result-id="${target}"]`).addClass("show");
  });

  $(".search-key-box,#dummy-search").click(function () {
    $(".search-modal-wrapper").addClass("active");
    $(".search-modal-overlay").addClass("active");
    $(".search-input").focus();
  });

  $(".search-modal-overlay").click(function () {
    $(".search-modal-wrapper").removeClass("active");
    $(this).removeClass("active");
  });

  $(".search-modal-close").click(function () {
    $(".search-modal-wrapper").removeClass("active");
    $(".search-modal-overlay").removeClass("active");
  });

  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      $(".search-modal-wrapper").removeClass("active");
      $(".search-modal-overlay").removeClass("active");
    }
  });
});
