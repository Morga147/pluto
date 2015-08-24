// jQuery Review

//********************************************//

// When using JQuery you should set your page up like this (after linking jQuery to your html sheet)
// This is called a DOM ready event
// If you cash wrap your whole file like this, it won't load anything until jQuery is accessed and loaded
$(function(){
// setTimeout
// This is measured in milliseconds, so 1000 = 1 sec. and run ONCE
setTimeout(function(){
  alert("BOOM!");
}, 3000);

//setInterval
// This repeats the function every 1 second

setInterval(function(){
  alert("BOOM!");
}, 3000);

var myNewDiv = $('<div></div>')
// --> (/') let's you use '' or (\") " " INSIDE other quotes
// Once you create this, it doesn't exist anywhere except in the variable
// Won't show up on the page until you append it to something already in the html
$("body").append(myNewDiv);
//Now you're ready to rock

// Removing Elements
// .remove is a jQuery
setTimeout(function(){
  myNewDiv.remove();
}, 1000);

// .addClass
// myNewDiv.addClass("fancy");

setTimeout(function(){
  myNewDiv.addClass("fancy");
})

// .toggleClass
// adds class or removes it. If something has the specified class, it removes and vice versa.
// works well with setInterval, because you can attach a style to that class, remove it, attach it repeatedly and create blinkys etc.
setInterval(function(){
  myNewDiv.toggleClass("fancy");
});

// jQuery events
// -- ready (document)
// -- click (anything)
// -- hover (over and out function)
$("#fireworks-button").on("click", function(){
  alert("BOOM!");
});

// .hover takes TWO functions, one that runs when the pointer hover over, the other is a function for what happens when the pointer moves off
$("fireworks-button").hover(function(){
  $("fireworks-button").addClass("fancy");
}, function(){
  //do something else
  }
);

})();
