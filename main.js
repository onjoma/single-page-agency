$(window).scroll(function () {
  if($(window).scrollTop()){
    $('.navbar-nav').addClass('sticky');
  }
  else {
    $('.navbar-nav').removeClass('sticky');
  }
  
});