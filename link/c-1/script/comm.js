$(document).ready(function () {
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

  $("#gallery").css("background", "#c0c0c0");
  $(".gallery").hide();

  $("#notice").click(function () {
    $(".notice").show();
    $(".gallery").hide();
    $("#gallery").css("background", "#c0c0c0");
    $("#notice").css("background", "#ffa820");
  });

  $("#gallery").click(function () {
    $(".gallery").show();
    $(".notice").hide();
    $("#notice").css("background", "#c0c0c0");
    $("#gallery").css("background", "#ffa820");
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
