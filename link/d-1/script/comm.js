$(function () {
  $(".gnb-2depth").hide();

  $(".gnb-1depth li").mouseenter(function () {
    $(this).find(".gnb-2depth").stop().slideDown();
  });

  $(".gnb-1depth li").mouseleave(function () {
    $(this).find(".gnb-2depth").stop().slideUp();
  });

  let index = 0;
  $(".sliderWrap").append($(".slider").first().clone(true));

  setInterval(function () {
    index++;
    $(".sliderWrap").animate({ marginTop: -index * 400 + "px" }, 600);

    if (index == 3) {
      setTimeout(function () {
        $(".sliderWrap").animate({ marginTop: 0 }, 0);
        index = 0;
      }, 700);
    }
  }, 3000);

  $(".gallery").hide();
  $("#gallery").css("background", "#d8d8d8");

  $("#notice").click(function () {
    $(".notice").show();
    $(".gallery").hide();
    $("#notice").css("background", "#61d745");
    $("#gallery").css("background", "#d8d8d8");
  });

  $("#gallery").click(function () {
    $(".gallery").show();
    $(".notice").hide();
    $("#gallery").css("background", "#61d745");
    $("#notice").css("background", "#d8d8d8");
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
