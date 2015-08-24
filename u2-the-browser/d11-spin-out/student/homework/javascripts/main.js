
// Part 1
(function(){
var wayNoWay = $("button.way-no-way");
wayNoWay.click(function(){
  if(wayNoWay.text().toLowerCase() === "way"){
    wayNoWay.text("no way");
  } else {
    wayNoWay.text("way");
  }
});
}) ();

//Part 2
(function (){
var span = $("span.name");
span.click(function(){
  span.addClass("hidden");
  $("input.input-name").removeClass("hidden");
  $("input.input-name").val(span.text());
});
})();

// Part 3
(function(){
  var input = $("input.input-name");
  var span = $("span.name");
  input.keypress(function(){
    if(event.which === 13){
      input.addClass("hidden");
      span.removeClass("hidden");
      span.text(input.val());
    }
  });
})();

// Part 4

var faceImg = $("img.extreme-closeup");
var x = 0;
var timeOut;
faceImg.mousedown(function(){
  timeOut = setInterval(function(){
    x += 1;
    faceImg.css("transform", "scale("+x+")");
  }, 200);
});

// Part 5
faceImg.mouseup(function(){
  clearInterval(timeOut);
  x = 1;
  faceImg.css("transform", "scale("+x+")");
});
