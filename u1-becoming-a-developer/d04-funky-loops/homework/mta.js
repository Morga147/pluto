
// Empty function wrap to localize the scope
(function() {
// Given arrays
var nLineStops   = ['Times Square', '34th', '28th-n', '23rd-n', 'Union Square', '8th'];
var lLineStops   = ['8th Ave', '6th Ave', 'Union Square', '3rd Ave', '1st Ave'];
var sixLineStops = ['Grand Central', '33rd', '28th-six', '23rd-six', 'Union Square', 'Astor Place'];

// Prompt for which line they'll be riding
function welcome (){
  var welcomeToMTA = prompt("Welcome to the MTA. \nWhich line are you taking today? [N, L, 6]");
  if(welcomeToMTA.toLowerCase() === "n"){
    nLine();
  } else if (welcomeToMTA.toLowerCase() === "l") {
    lLine();
  } else {
    sixLine();
  }
}

function nLine(){
// Personally created variables
  var getOn, getOff, numOfStops;
  getOn = prompt("The N Line stops at: Times Square, 34th, 28th-n, 23rd-n, Union Square, and 8th. \nWhere are you boarding?");
  getOff = prompt("The N Line stops at: Times Square, 34th, 28th-n, 23rd-n, Union Square, and 8th.\nWhere are you getting off?");

  numOfStops = nLineStops.indexOf(getOff.toLowerCase()) - nLineStops.indexOf(getOn.toLowerCase());

  window.alert("You will be travelling " + numOfStops + " stop(s).");
  }

function lLine(){
  // Personally created variables
  var getOn, getOff, numOfStops;
  getOn = prompt("The L Line stops at: 8th Ave, 6th Ave, Union Square, 3rd Ave, and 1st Ave. \nWhere are you boarding?");
  getOff = prompt("The L Line stops at: 8th Ave, 6th Ave, Union Square, 3rd Ave, and 1st Ave.\nWhere are you getting off?");

  numOfStops = lLineStops.indexOf(getOff.toLowerCase()) - lLineStops.indexOf(getOn.toLowerCase());

  window.alert("You will be travelling " + numOfStops + " stop(s).");
}

function sixLine(){
  // Personally created variables
  var getOn, getOff, numOfStops;
  getOn = prompt("The 6 Line stops at: Grand Central, 33rd, 28th-six, 23rd-six, Union Square, and Astor Place. \nWhere are you boarding?");
  getOff = prompt("The 6 Line stops at: Grand Central, 33rd, 28th-six, 23rd-six, Union Square, and Astor Place. \nWhere are you getting off?");

  numOfStops = sixLineStops.indexOf(getOff.toLowerCase()) - sixLineStops.indexOf(getOn.toLowerCase());

  window.alert("You will be travelling " + numOfStops + " stop(s).");
}
// Call the initial function "welcome()" to run the program
welcome();

}) ();
