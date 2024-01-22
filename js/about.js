$(document).ready(function(){

  $(window).scroll(function(){

    let scrollpos=$(this).scrollTop();
    $("#txt1").text(scrollpos);

    if(scrollpos > 600){
      $(".top_btn").fadeIn();
    }else{
      $(".top_btn").fadeOut();
    };

    //About Showbox 제목
    if(scrollpos>=0 && scrollpos<400){
      $(".a1 h2").addClass("active");
    }else{
      $(".a1 h2").removeClass("active");
    };

    //History 제목
    if(scrollpos>=1400 && scrollpos<2100){
      $(".a2 h2").addClass("active");
    }else{
      $(".a2 h2").removeClass("active");
    };

    //Business Area 제목
    if(scrollpos>=6500 && scrollpos<7000){
      $(".a3 h2").addClass("active");
    }else{
      $(".a3 h2").removeClass("active");
    };  
    
    //History 퀵메뉴
    // if(scrollpos>=2300 && scrollpos<5900){
    //   $(".a2_nav").addClass("fixed");
    // }else{
    //   $(".a2_nav").removeClass("fixed");
    // }; 

    //#h1 위치
    if(scrollpos>=2300 && scrollpos<2999){
      $(".a2_nav a:nth-child(1) span").addClass("on");
    }else{
      $(".a2_nav a:nth-child(1) span").removeClass("on");
    }; 

    //#h2 위치
    if(scrollpos>=3000 && scrollpos<4199){
      $(".a2_nav a:nth-child(2) span").addClass("on");
    }else{
      $(".a2_nav a:nth-child(2) span").removeClass("on");
    }; 

    //#h3 위치
    if(scrollpos>=4200 && scrollpos<4999){
      $(".a2_nav a:nth-child(3) span").addClass("on");
    }else{
      $(".a2_nav a:nth-child(3) span").removeClass("on");
    }; 

    //#h4 위치
    if(scrollpos>=5000 && scrollpos<5799){
      $(".a2_nav a:nth-child(4) span").addClass("on");
    }else{
      $(".a2_nav a:nth-child(4) span").removeClass("on");
    }; 
    
    //#h5 위치
    if(scrollpos>=5800 && scrollpos<6080){
      $(".a2_nav a:nth-child(5) span").addClass("on");
    }else{
      $(".a2_nav a:nth-child(5) span").removeClass("on");
    }; 
  });

  
  //History 퀵메뉴 호버
  $(".a2_nav span").hover(function(){
    $(this).addClass("on")
  },function(){
    $(this).removeClass("on")
  });

  
  //슬라이드 다음보기
  $(".side_btn .rbtn").click(function(){

    $(".slide_in ul").stop(true,true).animate({marginLeft:"-=340px"},500,function(){
      $(".slide_in ul li:first-child").appendTo(".slide_in ul");
      $(this).css({marginLeft:"0px"});
    });

  });

  //이전보기
  $(".side_btn .lbtn").click(function(){

    $(".slide_in ul").stop(true,true).animate({marginLeft:"+=340px"},500,function(){
      $(".slide_in ul li:last-child").prependTo(".slide_in ul");
      $(this).css({marginLeft:"0px"});
    });
    
  });


  //History 목록1 호버 포스터 바뀜
  $(".bi1>div").hover(function(){

    let oldimg = 0;
    let newimg = $(this).index()-1;

    $(".body1_img ul li").eq(oldimg).stop().hide();
    $(".body1_img ul li").eq(newimg).stop().show();
    oldimg = newimg;
    
  },function(){
    $(".body1_img ul li").stop().hide();
  });

  //History 목록2 호버 포스터 바뀜
  $(".bi2>div").hover(function(){

    let oldimg = 0;
    let newimg = $(this).index()-1;

    $(".body2_img ul li").eq(oldimg).stop().hide();
    $(".body2_img ul li").eq(newimg).stop().show();
    oldimg = newimg;
    
  },function(){
    $(".body2_img ul li").stop().hide();
  });

  //History 목록2 포스터 부분 fixed
  $(window).scroll(function(){   
    let scrollfix = $(this).scrollTop();
    if(scrollfix>=3000 && scrollfix<3640){  
      $(".body2_img").addClass("fix");   
    }else{  
      $(".body2_img").removeClass("fix"),600;   
    };  
  });

  //History 목록3 호버 포스터 바뀜
  $(".bi3>div").hover(function(){

    let oldimg = 0;
    let newimg = $(this).index()-1;

    $(".body3_img ul li").eq(oldimg).stop().hide();
    $(".body3_img ul li").eq(newimg).stop().show();
    oldimg = newimg;
    
  },function(){
    $(".body3_img ul li").stop().hide();
  });

  //History 목록4 호버 포스터 바뀜
  $(".bi4>div").hover(function(){

    let oldimg = 0;
    let newimg = $(this).index()-1;

    $(".body4_img ul li").eq(oldimg).stop().hide();
    $(".body4_img ul li").eq(newimg).stop().show();
    oldimg = newimg;
    
  },function(){
    $(".body4_img ul li").stop().hide();
  });

  //History 목록5 호버 포스터 바뀜
  $(".bi5>div").hover(function(){

    let oldimg = 0;
    let newimg = $(this).index()-1;

    $(".body5_img ul li").eq(oldimg).stop().hide();
    $(".body5_img ul li").eq(newimg).stop().show();
    oldimg = newimg;
    
  },function(){
    $(".body5_img ul li").stop().hide();
  });

});
