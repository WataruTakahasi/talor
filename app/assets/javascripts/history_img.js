$(function(){
  $('#history1').css("opacity","0");
  $(window).scroll(function (){
    $(".history1").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $("#history1",this).css("opacity","1" );
        $("#history1",this).fadeIn();
      } else {
        $("#history1",this).css("opacity","0" );
        $("#history1",this).fadeOut();
      }
    });
  });
});
$(function(){
  $('#history2').css("opacity","0");
  $(window).scroll(function (){
    $(".history2").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/7){
        $("#history2",this).css("opacity","1" );
        $("#history2",this).fadeIn();
      } else {
        $("#history2",this).css("opacity","0" );
        $("#history2",this).fadeOut();
      }
    });
  });
});
$(function(){
  $('#history3').css("opacity","0");
  $(window).scroll(function (){
    $(".history3").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/100){
        $("#history3",this).css("opacity","1" );
        $("#history3",this).fadeIn();
      } else {
        $("#history3",this).css("opacity","0" );
        $("#history3",this).fadeOut();
      }
    });
  });
});
$(function(){
  $('.history_line').css("opacity","0");
  $(window).scroll(function (){
    $(".history_line_div").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/100){
        $('.history_line').css("opacity","1");
        $(".history_line").addClass("history_line2");
      }
    });
  });
});