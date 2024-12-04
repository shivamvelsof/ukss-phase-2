$(document).ready(function () {
  $('[data-toggle="league-modal"]').click(function () {
    $('.league-modal-overlay').addClass('active-overlay');
    $('.leagues-modal').addClass('active-modal');
  });
  $('.league-modal-overlay,.leagues-modal-close').click(function () {
    $('.league-modal-overlay').removeClass('active-overlay');
    $('.leagues-modal').removeClass('active-modal');
  });
});
