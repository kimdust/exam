$(document).ready(function () {
  $(".gnb-2depth").hide();

  $(".gnb-1depth > li").mouseover(function () {
    $(".gnb-2depth").stop().slideDown();
  });

  $(".gnb-1depth > li").mouseleave(function () {
    $(".gnb-2depth").stop().slideUp();
  });

  let index = 0;
  $(".sliderWrap").append($(".slider").first().clone(true));

  setInterval(function () {
    index++;
    $(".sliderWrap").animate({ marginTop: -index * 300 + "px" }, 600);

    if (index == 0) {
      setTimeout(function () {
        $(".sliderWrap").animate({ marginTop: 0 }, 0);
        index = 0;
      }, 700);
    }
  }, 3000);

  const noticeBtn = $("#notice-btn");
  const galleryBtn = $("#gallery-btn");

  $(".gallery").hide();
  noticeBtn.css("background", "red");

  noticeBtn.click(function () {
    $(".notice").show();
    $(".gallery").hide();
    noticeBtn.css("background", "red");
    galleryBtn.css("background", "rgb(187, 187, 187)");
  });

  galleryBtn.click(function () {
    $(".notice").hide();
    $(".gallery").show();
    galleryBtn.css("background", "red");
    noticeBtn.css("background", "rgb(187, 187, 187)");
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
