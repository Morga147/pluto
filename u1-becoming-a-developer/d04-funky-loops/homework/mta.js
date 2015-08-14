// Part 4

// Given arrays
var nLineStops   = ['Times Square', '34th', '28th-n', '23rd-n', 'Union Square', '8th'];
var lLineStops   = ['8th Ave', '6th Ave', 'Union Square', '3rd Ave', '1st Ave'];
var sixLineStops = ['Grand Central', '33rd', '28th-six', '23rd-six', 'Union Square', 'Astor Place'];

// Personally created variables
var getOn, getOff, numOfStops;
getOn = prompt("The N Line stops at: Times Square, 34th, 28th-n, 23rd-n, Union Square, and 8th. \nWhere are you boarding?");
getOff = prompt("Where are you getting off?");

numOfStops = nLineStops.indexOf(getOff) - nLineStops.indexOf(getOn);

window.alert("You will be travelling " + numOfStops + " stop(s).");

// Part 5
