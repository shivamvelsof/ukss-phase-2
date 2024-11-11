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
    const select = $(this)
      .parents(".sc-action-wrapper")
      .find(".sc-select-size");
    if (select.val() === "") {
      $(select).parents(".sc-select-size-content").addClass("select-error");
    }
  });

  $(".sc-select-size").change(function () {
    const value = $(this).val();
    $(this).parents(".sc-select-size-content").removeClass("select-error");
    if (value === "") {
      $(this).parents(".suggestion-card").removeClass("ready-to-add");
    } else {
      $(this).parents(".suggestion-card").addClass("ready-to-add");
    }
  });

  // let shakeInterval;

  // function startAnimation() {
  //   clearInterval(shakeInterval);
  //   $(".suggestion-card").removeClass("shake-card");
  //   shakeInterval = setInterval(() => {
  //     $(".suggestion-card").addClass("shake-card");
  //     setTimeout(() => {
  //       $(".suggestion-card").removeClass("shake-card");
  //     }, 700);
  //   }, 3500);
  // }

  // function stopAnimation() {
  //   clearInterval(shakeInterval);
  //   $(".suggestion-card").removeClass("shake-card");
  // }

  // $(".suggestion-card").hover(
  //   function () {
  //     // over
  //     stopAnimation();
  //   },
  //   function () {
  //     // out
  //     startAnimation();
  //   }
  // );
  // // Start the animation initially
  // startAnimation();

  // function animateSuggestionCard() {
  //   setInterval(() => {
  //     $(".suggestion-card").addClass("shake-card");
  //     setTimeout(() => {
  //       $(".suggestion-card").removeClass("shake-card");
  //     }, 500); // Remove the class after 1 second
  //   }, 5000); // Repeat the entire sequence every 5 seconds
  // }

  // animateSuggestionCard();

  // function animateSuggestionCard() {
  //   setInterval(() => {
  //     $(".suggestion-card").addClass("shake-card");
  //     setInterval(() => {
  //       $(".suggestion-card").removeClass("shake-card");
  //     }, 1000);
  //   }, 5000);
  // }

  // animateSuggestionCard();
});
