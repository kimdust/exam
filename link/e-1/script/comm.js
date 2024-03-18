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
    $(".sliderWrap").animate({ marginLeft: -index * 100 + "%" }, 600);

    if (index == 3) {
      setTimeout(function () {
        $(".sliderWrap").animate({ marginLeft: 0 }, 0);
        index = 0;
      }, 700);
    }
  }, 3000);

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
