$(document).ready(function () {
  $(".login-with-email-btn").click(function () {
    $(this).addClass("hide-btn");
    $(".login-form-wrapper").removeClass("hide-login-form");
  });
});
