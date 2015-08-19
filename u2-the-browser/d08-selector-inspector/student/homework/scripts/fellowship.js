console.log("followship.js loaded");

//***************************//
// Part 1
// An example of using setTimeout to call makeMiddleEarth after 2 seconds.


var makeMiddleEarth = function() {
    // Create a section tag with an (id of middle-earth)<-- The Problem
  var middleEarth = $("<section>");
  middleEarth.attr("id", "middle-earth");
    // Create an article tag for each lands in the lands array in characters.js
    // Give each article tag a (class of "land") <-- The Problem
  var artShire = $("<article>");
  artShire.addClass("land");
  var artRivendell = $("<article>");
  artRivendell.addClass("land");
  var artMordor = $("<article>");
  artMordor.addClass("land");

    // Inside each article tag include an h1 with the name of the land
  var shire = $("<h1>");
  shire.text("The Shire");
  artShire.append(shire);

  var rivendell = $("<h1>");
  rivendell.text("Rivendell");
  artRivendell.append(rivendell);

  var mordor = $("<h1>");
  mordor.text("Mordor");
  artMordor.append(mordor);

  // Append each article.land to section#middle-earth
  middleEarth.append(artShire);
  middleEarth.append(artRivendell);
  middleEarth.append(artMordor);

  // Append section#middle-earth to the document body
  $("body").append(middleEarth);
  // Use setTimeout to delay the execution of the next function (in this case,
  // makeHobbits) by several seconds

  setTimeout(makeHobbits, 3000);
}
setTimeout(makeMiddleEarth, 2000);

//*************************************//
//Part 2

var makeHobbits = function() {
  // Create a ul with an id of "hobbits"
  var shortGang = $("<ul>");
  shortGang.attr("id", "hobbits");
  // Create li tags for each Hobbit in the hobbits array in characters.js
  hobbits.forEach(hobbitList);
  function hobbitList(hobbitName){
    var hobName = $("<li>");
  // Give each li tag a class of "hobbit"
    hobName.addClass("hobbit");
  // Set the text of each li.hobbit to one of the Hobbits in the array
    hobName.text(hobbitName);
    shortGang.append(hobName);
  }
  // Append the ul#hobbits to the article.land representing "The Shire"
  $(".land").eq(0).append(shortGang);
}

//***************************************//
var keepItSecretKeepItSafe = function() {
  // Create a div with an id of 'the-ring'
  var bling = $("div");
  bling.attr("id", "the-ring");
  // Give div#the-ring a class of 'magic-imbued-jewelry'
  bling.addClass("magic-imbued-jewelry");
    // Add div#the-ring as a child element of the li.hobbit representing "Frodo"
  $(".hobbit").eq(0).append(bling);
  // Add an event listener so that when a user clicks on the ring,
  // The nazgulScreech function (provided in index.html) is invoked
  // look up .click() - https://api.jquery.com/click/ in the jQuery docs to see how this works
  // it'll look like target.click(nazgulScreech)
  // bit of a freebie since we're not covering events until tomorrow
  bling.click(nazgulScreech);
  // Use setTimeout to delay the execution of the next function
  // setTimeout(makeBuddies, 2000);
} 
