// var car = ["Tesla", "sport", "4-wheel drive"];
// var brand = car[0];
// var style = car[1];
// Need better solution;

// { } <-- these are called an object literal and they initiate an object
// Objects are all key / value pairs
var tesla = {
  brand: "Tesla",
  model: "Model S",
  class: "sport",
  color: "silver",
  horsepower: 435,
  cost: 80000,
  isElectric: true
};
// brand, class, etc. are called "attributes" or "properties" of an object
// Object.keys(car).keys <-- Will print whole list to the console
//Actually, both of these will do the same thing: console.log(tesla.color)(<-- key notation) or console.log(tesla['color']) (<-- Bracket notation);
// Object.keys(car).length <-- Will tell you how many items are in the list
// If you know the keys of an object, you can use this notation to pull the data stored in that key: tesla.cost --> this will spit out 80000.

var bmw = {
  brand: "BMW",
  model: "M5",
  class: "sport",
  color: "blue",
  horsepower: 999,
  cost: 90000,
  isElectric: false
};

// Let's add a function to the object.  Remember, functions are data types, too, and can therefore be entered into objects
// By listing the "drive" function like this, we've created the drive key and the function value
var mustang = {
  brand: "Ford",
  model: "Mustang",
  class: "sport",
  color: "red w/ white stripes & blue stars",
  horsepower: 1000,
  cost: 50000,
  isElectric: false,
  drive: function() {
    console.log('drive');
  }
};
// If you wanted to run the "drive function" go to the console and type: mustang.drive();
//If we're creating multiple "car" objects, you can store all the info in an array of objects
var cars = [tesla, bmw, mustang];
cars[0]; // Tesla object
cars [1]; // BMW object
cars [2]; // Mustang object

//Now print out all the info you have stored in this array
// for(var i=0; i<cars.length; i++) {
//   console.log(cars[i]);
// };

// Now print out JUST the horsepower of each
// for(var i=0; i<cars.length; i++) {
//   console.log(cars[i].horsepower);
// };

// Print where every key is deliminated by next line
// for(var i=0; i<cars.length; i++) {
//   console.log("brand:" + cars[i].brand + '\n' +
//               "model:" + cars[i].model + '\n' +
//               "class:" + cars[i].class + '\n' +
//               "color:" + cars[i].color + '\n' +
//               "horsepower:" + cars[i].horsepower + '\n' +
//               "cost:" + cars[i].cost + '\n' +
//               "isElectric:" + cars[i].isElectric);
// };
