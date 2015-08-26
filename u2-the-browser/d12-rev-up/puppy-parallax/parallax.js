$(document).ready(function (){
//use scrolling
var $bg = $(".bg");
// $(window).on("scroll", function(){
//
//   var fromTop = $(window).scrollTop();
//   $bg.css('top', (((-1)*fromTop)/3))
//
//   });

  // use mouse

&(window).mousemove(function(event){
  var xMove = -(event.pageX)/15;
  var yMove = -(event.pageY)/15;
  $bg.css("left", xMove);
  $bg.css("top", yMove);

});
