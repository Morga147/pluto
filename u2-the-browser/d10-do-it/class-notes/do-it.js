jQuery(function() {
  // 1. Detect Button Click
  var addTaskButton = $("button");
  // 2. Get input Value
  //  --> 2.1 First grab the element
  var inputTask = $("input#getTask");
  // Every event listener takes an event parameter
  addTaskButton.on("click", function(event){
  // Default is that when a button is clicked, the page reloads. This keeps the page from re-loading on "click"
    event.preventDefault();
  //This creates a new <li> element
    var newTask = $("<li></li>");
  // Key / Value Pairs --> These functions can take 2 parameters: tag, and object
  // This is equal to the HTML: <input type="checkbox" class="toggle-checked">
    var checkbox = $("<input>", {type: "checkbox", class: "toggle-checked"});
  // Now add that sucker! (add the checkbox to the next list item)
    newTask.prepend(checkbox);
  // --> 2.2 AFTER they click, grab the VALUE of the element
    newTask.append(inputTask.val());

  // Add everything to the <ul> tag now -- use prepend for the newest item to be on the top, append for the newest item to go to the bottom.
  $("#task-list").prepend(newTask)
  // Now clear the value in the input box
  inputTask.val("");
  // Now generate the strike-through when you click the bullet-box
  // Create a class on your CSS sheet that strikes through
  // Call that CSS class .did-it
  checkbox.on("click", function(){
  // Don't include the period (.did-it) since "toggleClass" function is only going to be working with classes
    newTask.toggleClass("did-it");
  // alert("Don't stop now! You're on a roll!");
  });
  });

});

/* Pan's Code:

jQuery(function() {
  var addTaskButton = $("button");
  var inputTask = $("#task");

  addTaskButton.on("click", function(event) {
    event.preventDefault();
    var newTask = $("<li>"); // creates a new li element
    var checkbox = $("<input>", {type: "checkbox", class: "toggled-checked"});
    var theTask = inputTask.val();

    newTask.append(checkbox);
    newTask.append(theTask);

    $("#task-list").prepend(newTask);

    inputTask.val("");

    checkbox.on('click', function() {
      newTask.toggleClass("did-it");
    });
  });

// Special "Keydown Command"
  inputTask.on('keydown', function(event) {
    if(event.which == 49) {
      event.preventDefault();
      addTaskButton.click();
    }
  });


});

*/
