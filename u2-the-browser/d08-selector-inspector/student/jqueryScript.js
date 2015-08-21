(function() {

var number = 100;
// Create a new tag for the lyrics to rest inside
var lyrics1 = $("<p>");
// Now put text into the new tag you created
lyrics1.text(number + " bottles of juice on the wall.");

var lyrics2 = $("<p>");
lyrics2.text(number + " bottles of juice. Take one down, pass it around.");

function numReduction(){
  number -= 1;
  var wholeVerse = number + lyrics1 + number + lyrics2 + number + lyrics1;
  console.log(wholeVerse);
}

setInterval(numReduction, 2000);

}) ();
