function a() {
  $('#bg-sousmenu').stop().animate({
    height: 0
  }, 400);
}
 


function b() {

    if ($(this).find('ul.niv2').length) {
  
      var newHeight = $(this).find('ul.niv2').height();
  
      $('#bg-sousmenu').stop().animate({
        height: newHeight + 40
      }, 400);
    }
  
  }