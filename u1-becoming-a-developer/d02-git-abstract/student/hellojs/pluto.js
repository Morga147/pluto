<<<<<<< HEAD
// 1st Prompt
var name = prompt("What is your name?");

// 1st Alert
alert(("take out the trash, " + name).toUpperCase() + "!!!");

// 2nd Prompt
var bags = parseInt(prompt("How many bags of trash are there?"));
var minutes = bags * 5;

// 2nd Alert 
 alert("It should take you " + minutes + " minutes.");
=======
var message, name, bags, minutes;

// 1. PROMPT for user's name
name = prompt("What is your name?");

// 2. ALERT "TAKE OUT THE TRASH, [NAME]"
alert(("take out the trash, "+name).toUpperCase())

bags = parseInt(prompt("How many bags of trash are there?"));

// Alert "It should take you [MINUTES] minutes", where
// [MINUTES] is the number of bags multiplied by 5
minutes = bags * 5;

alert("It should take you "+minutes+" minutes");
>>>>>>> d5aa9b52adb29990afc14591a06d952a182033b7
