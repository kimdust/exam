$(function () {
  $(".gnb-2depth").hide();
  $(".gnb-1depth li").mouseenter(function () {
    $(this).find(".gnb-2depth").stop().slideDown();
  });
  $(".gnb-1depth li").mouseleave(function () {
    $(this).find(".gnb-2depth").stop().slideUp();
  });

  let index = 0;

  setInterval(function () {
    let nextIndex = (index + 1) % 3;

    $(".slider").eq(index).fadeOut(1200);
    $(".slider").eq(nextIndex).fadeIn(1200);

    index = nextIndex;
  }, 3000);

  $(".gallery").hide();
  $("#notice").css("background", "#4289f4");
  $("#notice").css("color", "white");

  $("#notice").click(function () {
    $(".notice").show();
    $(".gallery").hide();
    $("#notice").css("background", "#4289f4");
    $("#notice").css("color", "white");
    $("#gallery").css("background", "#e2e2e2");
    $("#gallery").css("color", "#666");
  });

  $("#gallery").click(function () {
    $(".gallery").show();
    $(".notice").hide();
    $("#gallery").css("background", "#4289f4");
    $("#gallery").css("color", "white");
    $("#notice").css("background", "#e2e2e2");
    $("#notice").css("color", "#666");
  });

  $(".modal").hide();
  $(".modal-bg").hide();

  $(".notice ul li:first-child").click(function () {
    $(".modal").show();
    $(".modal-bg").show();
  });

  $(".modal button").click(function () {
    $(".modal").hide();
    $(".modal-bg").hide();
  });
});
