$(document).ready(function(){

  $(window).scroll(function(){
    let scrollpos=$(this).scrollTop();

    if(scrollpos > 600){
      $(".top_btn").fadeIn();
    }else{
      $(".top_btn").fadeOut();
    };

  });

  /* MOVIE/NEWS__________________________________ */
  // 탭메뉴 클릭시 해당 콘텐츠 보여짐
  $(".t1, .t2").click(function(){

    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $(this).find("span:first-child").show();


    let result = $(this).attr("data-alt");
    $(".tabContents div").removeClass("active");
    $("#" + result).addClass("active");


  });




});
