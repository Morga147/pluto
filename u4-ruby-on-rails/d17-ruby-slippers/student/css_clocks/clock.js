// Write a method called clock()
//
// add an event listener to window to fire up "clock" when the page loads

function clock(){
  var hourHand = $("#hour-hand");
  var minuteHand = $("#minute-hand");
  var secondHand = $("#second-hand");

  var secondDeg = 0;
  var minuteDeg = 0;
  var hourDeg = 0;
  window.setInterval(function(){
    secondDeg += 6;
    // 6 /60 simplifies to 1/10
    minuteDeg += 1/10;
    hourDeg += 1/120;
    secondHand.css("transform", "rotate("+secondDeg+"deg)");
    minuteHand.css("transform", "rotate("+minuteDeg+"deg)");
    hourHand.css("transform", "rotate("+hourDeg+"deg)");
  }, 1000);

}
$(document).on("load",clock());
