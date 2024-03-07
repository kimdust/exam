$(document).ready(function () {
  $(".gnb-2depth").hide();

  $(".gnb-1depth li").mouseenter(function () {
    $(this).find(".gnb-2depth").stop().slideDown();
  });
  $(".gnb-1depth li").mouseleave(function () {
    $(this).find(".gnb-2depth").stop().slideUp();
  });

  let currentIndex = 0;

  setInterval(function () {
    let nextIndex = (currentIndex + 1) % 3;

    $(".slider").eq(currentIndex).fadeOut(1200);
    $(".slider").eq(nextIndex).fadeIn(1200);

    currentIndex = nextIndex;
  }, 3000);

  $(".gallery").hide();
  $("#notice-btn").css("background", "#ffdb13");

  $("#notice-btn").click(function () {
    $(".notice").show();
    $(".gallery").hide();
    $("#notice-btn").css("background", "#ffdb13");
    $("#gallery-btn").css("background", "#cfcfcf");
  });

  $("#gallery-btn").click(function () {
    $(".notice").hide();
    $(".gallery").show();
    $("#gallery-btn").css("background", "#ffdb13");
    $("#notice-btn").css("background", "#cfcfcf");
  });

  $(".modal").hide();
  $(".modal-bg").hide();

  $(".notice li:first-child").click(function () {
    $(".modal").show();
    $(".modal-bg").show();
  });

  $(".modal button").click(function () {
    $(".modal").hide();
    $(".modal-bg").hide();
  });
});
