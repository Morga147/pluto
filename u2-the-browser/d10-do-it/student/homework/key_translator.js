jQuery(function() {
  var addTaskButton = $("button");
  var userInput = $("input#getEnglish");

  addTaskButton.on("click", function(event){
    event.preventDefault();
    var newTask = $("<li></li>");
    var getTheSymbol = "";

    switch (userInput.val().toLowerCase()) {
      case "command":
        getTheSymbol += "⌘" ;
        break;
      case "tab":
        getTheSymbol += "⇥";
        break;
      case "return":
        getTheSymbol += "⏎";
        break;
      case "option":
        getTheSymbol += "⌥";
        break;
      case "control":
        getTheSymbol += "⌃";
        break;
      case "esc":
        getTheSymbol += "⎋";
        break;
      case "left":
        getTheSymbol += "←";
        break;
      case "down":
        getTheSymbol += "↓";
        break;
      case "up":
        getTheSymbol += "↑";
        break;
      case "right":
        getTheSymbol += "→";
        break;
      case "shift":
        getTheSymbol += "⇧";
        break;
      case "eject":
        getTheSymbol += "⏏";
        break;
      case "caps":
        getTheSymbol += "⇪";
        break;
      case "save":
        getTheSymbol += "⌘ + s";
        break;
      case "print":
        getTheSymbol += "⌘ + p";
        break;
      case "find":
        getTheSymbol += "⌘ + f";
        break;
      default:
        getTheSymbol += "That's not a valid statement. Please try again.";
        break;
    }
  // Add the result of the switch statement to the newly created <li> tag
    newTask.append(getTheSymbol);
  // Add everything to the <ul> tag
  $("#returnedSymbol").prepend(newTask)
  // Clear the value in the input box
  userInput.val("");

  });

});
