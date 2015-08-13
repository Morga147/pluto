
var grade  = parseInt(prompt("What is your grade?[0-100]"), 10);
if (grade < 70) {
  alert("FAIL");

} else if (grade >= 70) {
  var absent = parseInt(prompt("How many absences?"), 10);
    if (absent > 4) {
      alert("FAIL");

  } else if (absent <= 4) {
  var tardies = parseInt(prompt("How many tardies?"), 10);
    if (tardies <= 4) {
      alert("PASS.");

  } else {
    alert("You're chronically late.  Talk to a producer.");
}
}
}


// var tardies = parseInt(prompt("How many tardies do you have?"));
// if (tardies > 4) {
//   alert("Chronically late.");
// } else if (tardies < 4){
//   alert("You were mostly on time.");
// } else if (tardies === 0) {
//   alert("Always on time.  Good job.");
// } else {
//   alert("Invalid input.");
// }
