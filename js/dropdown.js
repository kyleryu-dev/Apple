$(function() {
  $('#main_nav>li').hover(function() {
    $(this).children('.sub_nav').stop().slideToggle();
  });
});