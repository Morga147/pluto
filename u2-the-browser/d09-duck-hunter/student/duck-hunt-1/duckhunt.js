// Hey Pluto!
// --------------
// Let's have some fun!

// This is a jQuery "ready" closure:
jQuery(function() {
  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded

  // I'll do some of the work for you, first I will grab the <body></body>
  var body = $('body');

  // 1. Can you create a <div> with the class "duck" and name it "duck"
  var divDuck = $("<div></div>");
  divDuck.addClass("duck");
  body.append(divDuck);

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
setInterval(function(){
  divDuck.toggleClass("flap");
}, 250);
  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"

// divDuck.css("top", 100);
// divDuck.css("left", 200);

  // 4. Try making the duck move to a different location after 1 second
setInterval(function(){
  divDuck.css("top", Math.random()*300);
  divDuck.css("left", Math.random()*500);
}, 500);


  // 5. Congratulations!
})
