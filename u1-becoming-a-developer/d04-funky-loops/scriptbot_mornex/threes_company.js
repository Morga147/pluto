var script = "Opening theme and titles. \n";
var feature = prompt("Who does this week feature?");

if (feature == "Janet") {
  script += "Janet has a problem. \n";
  script += "Jack acts foolishly. \n";
  script += "Janet solves the problem and grows as a person. \n";
  script += "Mr. Roper says something this is really uncomfortable. \n";
  script += "Roll credits.";

} else {
  script += "Chrissy has a problem. \n";
  script += "There is a bawdy situation involving Jack. \n";
  var muck = prompt("Does Jack muck it all up?");
  if (muck == "yes") {
    script += "Janet solves the problem and grows as a person. \n";
    script += "Mr. Roper says something this is really uncomfortable. \n";
    script += "Roll credits.";
  } else {
    script += "The problem solves itself. \n";
    script += "Mr. Roper says something this is really uncomfortable. \n";
    script += "Roll credits.";
  }
}
console.log("Ok, here is your script: ");
console.log(script);
