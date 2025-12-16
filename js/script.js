$(document).ready(function(){

  /* ===== 슬라이더 + DOT ===== */
  let count = 0;
  const max = 2;
  let timer = null;

  function goSlide(n){
    count = n;
    $(".train").css("transform","translateX(" + (-1200 * count) + "px)");
    $(".dot").removeClass("on");
    $(".dot").eq(count).addClass("on");
  }

  function auto(){
    timer = setInterval(function(){
      count++;
      if(count > max) count = 0;
      goSlide(count);
    }, 2500);
  }

  auto();

  $(".dot").click(function(){
    clearInterval(timer);
    goSlide($(this).data("idx"));
    auto();
  });


  /* ===== 탭메뉴(서브페이지용) ===== */
  $(".tab_menu li").click(function(){
    let idx = $(this).index();

    $(".tab_menu li").removeClass("on");
    $(this).addClass("on");

    $(".tab_box").removeClass("on");
    $(".tab_box").eq(idx).addClass("on");
  });

});


