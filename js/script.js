$(document).ready(function(){

  let count = 0;

  setInterval(function(){
    count++;
    if(count > 2){ count = 0; }

    $(".train").css(
      "transform",
      "translateX(" + (-1200 * count) + "px)"
    );
  }, 2500);

});

$(document).ready(function(){

  // 슬라이더 (이미 있음)

  // 탭메뉴
  $(".tab_menu li").click(function(){
    let idx = $(this).index();

    $(".tab_menu li").removeClass("on");
    $(this).addClass("on");

    $(".tab_box").removeClass("on");
    $(".tab_box").eq(idx).addClass("on");
  });

});
