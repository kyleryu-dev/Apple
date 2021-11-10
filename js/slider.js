$(function() {
    var nowImg = 1;
    setInterval(function() {
      $('#slider').css('transform','translateX(-'+nowImg+'00vw');
      if(nowImg < 2) {
        nowImg++;
      }
    },3500);
    
    // button
    $('.slide_01').click(function() {
      $('#slider').css('transform','translate(0vw)');
      nowImg=1;
    });
    
    $('.slide_02').click(function() {
      $('#slider').css('transform','translate(-100vw)');
      nowImg=2;
    });
    
    $('.slide_03').click(function() {
      $('#slider').css('transform','translate(-200vw)');
    });
  });