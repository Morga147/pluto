artooWelcome();
function artooWelcome() {
  window.alert("(beep-boop whrrrrrr bleep) Welcome to the R2-D2 calculator!");
  artooCalc();
}

var operator;
function artooCalc() {
  do {
    operator = prompt("Please enter which operator you would like to use (+, -, *, /). Enter 'q' to quit.");
    if (operator.toLowerCase() === 'q') {
      break;
    } else if (operator === '+' || '-' || '*' || '/') {
      mathBaby();
    } else {
      alert("(whheeaaarrrrr! beee-ooohhh) You did not enter a viable operator!")
    }
  } while(operator.toLowerCase() != 'q');
}

function mathBaby() {
  var operand1 = parseInt(prompt('Enter your first integer operand:'));
  var operand2 = parseInt(prompt('Enter your second integer operand:'));
  var solution;
  if (operator === '+') {
    solution = (operand1 + operand2);
    alert("The solution to " + operand1 + " " + operator + " " + operand2 + " is " + solution + ".");
  } else if (operator === '-') {
    solution = (operand1 - operand2);
    alert("The solution to " + operand1 + " " + operator + " " + operand2 + " is " + solution + ".");
  } else if (operator === '*') {
    solution = (operand1 * operand2);
    alert("The solution to " + operand1 + " " + operator + " " + operand2 + " is " + solution + ".");
  } else {
    solution = (operand1 / operand2);
    alert("The solution to " + operand1 + " " + operator + " " + operand2 + " is " + solution + ".");
  }
}
