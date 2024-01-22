$(document).ready(function(){
  
  /* 서브메뉴다운 */
  $(".sub").hide();

  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown();
  },function(){
    $(this).find(".sub").stop().slideUp();
  });

  /* 스크롤 후 헤더 배경 */
  /* $(window).scroll(function(){

    let pos = $(window).scrollTop();

    if(pos>100){
      $(".headerBox").fadeIn();
    }else{
      $(".headerBox").fadeOut();
    }

  }); */


  /* 모달 */
  chk1 = true;
  $(".trigger").click(function(){

    $(this).toggleClass("active");

    if(chk1){
      $(".modal").fadeIn();
      $(".allmenu").css({marginRight:"17px"})
      $("html").css({overflowY:"hidden"})
      chk1=false;
    }else{
      $(".modal").fadeOut();
      $(".allmenu").css({marginRight:"0"})
      $("html").css({overflowY:"scroll"})
      chk1=true;
    };

  });

  /* 모달 gnb 호버할때 */
  $(".ml1, .ml2, .ml3, .ml4").hover(function(){
    $(this).siblings().css({"color":"#888"})
  },function(){
    $(this).siblings().css({"color":"#fff"})
  });

});
