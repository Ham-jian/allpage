$(document).ready(function(){

  /* front__________________________________________________________________ */
  let $img = $(".house_contents"); 
  let $text = $(".house_contents .house_text");
  let $lbtn = $(".side_btn .lbtn"); 
  let $rbtn = $(".side_btn .rbtn"); 
  let oldImg=0;
  let newImg=0;
  let oldText=0;
  let newText=0;
  let count = $img.length;


  //이미지&텍스트 전환효과 함수
  function changeImg(newImg){

    if(oldImg != newImg){
      $img.eq(oldImg).removeClass("imgVisible");
      $img.eq(newImg).addClass("imgVisible");
    };
    oldImg = newImg;

  };

  function changeText(newText){

    if(oldText != newText){
      $text.eq(oldText).removeClass("textVisible");
      $text.eq(newText).addClass("textVisible");
    };
    oldText = newText;

  };


  //자동함수 생성
  function autoImg(){
    newImg++;
    if(newImg>count-1){
      newImg=0;
    }
    changeImg(newImg);
  }
  function autoText(){
    newText++;
    if(newText>count-1){
      newText=0;
    }
    changeText(newText);
  }

  timer1=setInterval(autoImg,4000);
  timer2=setInterval(autoText,4000);


  //좌우버튼 클릭시
  $rbtn.click(function(){
    clearInterval(timer1);
    clearInterval(timer2);

    newImg++;
    if(newImg>count-1){
      newImg=0;
    }
    changeImg(newImg);

    newText++;
    if(newText>count-1){
      newText=0;
    }
    changeText(newText);

    timer1=setInterval(autoImg,4000);
    timer2=setInterval(autoText,4000);
  });
  $lbtn.click(function(){
    clearInterval(timer1);
    clearInterval(timer2);

    newImg--;
    if(newImg<0){
      newImg=count-1;
    }
    changeImg(newImg);

    newText--;
    if(newText<0){
      newText=count-1;
    }
    changeText(newText);

    timer1=setInterval(autoImg,4000);
    timer2=setInterval(autoText,4000);
  });


  /* left_______________________________________________________________________ */
  let $imgL = $(".hw-left div"); 
  let $lbtnL = $(".side_btn .lbtn"); 
  let $rbtnL = $(".side_btn .rbtn"); 
  let oldImgL=0;
  let newImgL=0;
  let countL = $img.length;


  //이미지&텍스트 전환효과 함수
  function changeImgL(newImgL){

    if(oldImgL != newImgL){
      $imgL.eq(oldImgL).removeClass("imgVisible");
      $imgL.eq(newImgL).addClass("imgVisible");
    };
    oldImgL = newImgL;

  };


  //자동함수 생성
  function autoImgL(){
    newImgL++;
    if(newImgL>countL-1){
      newImgL=0;
    }
    changeImgL(newImgL);
  }

  timerL=setInterval(autoImgL,4000);


  //좌우버튼 클릭시
  $rbtnL.click(function(){
    clearInterval(timerL);

    newImgL++;
    if(newImgL>countL-1){
      newImgL=0;
    }
    changeImgL(newImgL);

    timerL=setInterval(autoImgL,4000);
  });
  $lbtnL.click(function(){
    clearInterval(timerL);

    newImgL--;
    if(newImgL<0){
      newImgL=countL-1;
    }
    changeImgL(newImgL);

    timerL=setInterval(autoImgL,4000);
  });


  /* right_______________________________________________________________________ */
  let $imgR = $(".hw-right div"); 
  let $lbtnR = $(".side_btn .lbtn"); 
  let $rbtnR = $(".side_btn .rbtn"); 
  let oldImgR=0;
  let newImgR=0;
  let countR = $img.length;


  //이미지&텍스트 전환효과 함수
  function changeImgR(newImgR){

    if(oldImgR != newImgR){
      $imgR.eq(oldImgR).removeClass("imgVisible");
      $imgR.eq(newImgR).addClass("imgVisible");
    };
    oldImgR = newImgR;

  };


  //자동함수 생성
  function autoImgR(){
    newImgR++;
    if(newImgR>countR-1){
      newImgR=0;
    }
    changeImgR(newImgL);
  }

  timerR=setInterval(autoImgR,4000);


  //좌우버튼 클릭시
  $rbtnR.click(function(){
    clearInterval(timerR);

    newImgR++;
    if(newImgR>countR-1){
      newImgR=0;
    }
    changeImgR(newImgR);

    timerR=setInterval(autoImgR,4000);
  });
  $lbtnR.click(function(){
    clearInterval(timerR);

    newImgR--;
    if(newImgR<0){
      newImgR=countR-1;
    }
    changeImgR(newImgR);

    timerR=setInterval(autoImgR,4000);
  });


});