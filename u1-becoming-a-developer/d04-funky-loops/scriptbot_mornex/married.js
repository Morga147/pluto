console.log("Married with children bot");
var theme = "Opening theme and credits. \n";
var whining = prompt("Is Peggy whining about something?");
if (whining === "yes") {
  theme += "Al is mean to Peggy. \n";
} else {
  theme += "The kids start to whine. \n";
  theme += "Al is mean to them. \n";
}
theme += "Roll credits."; 
console.log("Ok, here is your script: ");
console.log(theme);
