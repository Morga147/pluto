// Number 0

function lengths(arrayOfStrings) {
  var numOfCharacters = [];
  for (var i=0; i<arrayOfStrings.length; i++) {
    numOfCharacters.push(arrayOfStrings[i].length);
  }
  return numOfCharacters;
}
console.log(numOfCharacters);

// Number 1

function fizzBuzzer (number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return ("fizzbuzz");
  } else if(number % 3 === 0) {
    return ("fizz");
  } else if (number % 5 === 0) {
    return ("buzz");
  } else {
    return ("McClane");
  }
}

// Number 2

function transmogrifier(firstNum, secondNum, thirdNum) {
  var equals = Math.pow((firstNum*secondNum), thirdNum);
  return (equals);
}

// Number 3

function toonify (accent, sentence) {
  if(accent === "daffy") {
    return (sentence.split(/s/i).join('th'));
  }  else if (accent === "elmer") {
    return (sentence.split(/r/i).join('w'));
  } else {
    return(sentence);
  }
}

// Number 4

function digitSum (num) {
  var stringConversion = num.toString(10);
  var sum = 0;
  for(var i=0; i<stringConversion.length; i++) {
    sum += parseInt(stringConversion.charAt(i), 10);
  }
  return sum;
}

// Number 5
function wordReverse(someString) {
  var array = someString.split(" ");
  var reversed = array.reverse();
  return reversed.join(" ");
}

// Number 6

function letterReverse(anyStringOfWords) {
  var array = anyStringOfWords.split(" ");
  var reversed = array.forEach(array.reverse());
  return reversed;
}

// Number 7
// Referencing what I wrote for Number 0 -->
//function lengths(arrayOfStrings) {
  //var numOfCharacters = [];
  //for (var i=0; i<arrayOfStrings.length; i++) {
    //numOfCharacters.push(arrayOfStrings[i].length);
//  }
  //return numOfCharacters;
//}

function longestWord (anyStringOfWords) {
  var arrayOfWords = anyStringOfWords.split(" ");
  var longest = 0;
  var word = "";
  for(var i = 0; i < longest.length; i++ ) {
    if (longest < arrayOfWords[i].length) {
      longest = arrayOfWords[i].length;
      word = arrayOfWords[i];
    }
  }
  return word;
}
