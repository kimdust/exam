$(document).ready(function () {
  $(".gnb-2depth").hide();
  $(".gnb-bg").hide();

  $(".gnb-1depth  li  a").mouseenter(function () {
    $(".gnb-2depth").stop().slideDown();
    $(".gnb-bg").stop().slideDown();
  });

  $(".gnb-2depth li").mouseleave(function () {
    $(".gnb-2depth").stop().slideUp();
    $(".gnb-bg").stop().slideUp();
  });

  let index = 0;

  setInterval(function () {
    let nextIndex = (index + 1) % 3;

    $(".slider").eq(index).fadeOut(1200);
    $(".slider").eq(nextIndex).fadeIn(1200);

    index = nextIndex;
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
