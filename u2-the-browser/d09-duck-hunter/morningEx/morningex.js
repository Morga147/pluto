(function() {
var ships = [
  {
    name: 'The Titanic',
    lost: 1912
  },
  {
    name: 'The Santa Maria',
    lost: 1492
  },
  {
    name: 'HMS Bounty',
    lost: 1790
  },
  {
    name: 'Old Ironsides',
    lost: null
  },
  {
    name: 'Potemkin',
    lost: 1923
  },
  {
    name: 'USS Monitor',
    lost: 1862
  },
  {
    name: 'HMS Dreadnought',
    lost: 1923
  },
  {
    name: 'Bismarck',
    lost: 1941
  },
  {
    name: 'HMS Beagle',
    lost: 1870
  },
  {
    name: 'Nuestra Señora de Atocha',
    lost: 1622
  }
]
// Prompt 1 - Print name of all ships

// for(var i=0; i<ships.length; i++){
//     console.log(ships[i].name);
// }
// Now do it with a .forEach instead!
// This does the exact same thing as the for-loop.  Never have to use a for-loop again for iterating across an array!
// ships.forEach(function(ship){
//   console.log(ship.name);
// });

// Prompt 2 - Use .map to get the names of the ships
// Remember, .map expects you to use 'return' something.  Then it will make a new array (which you should define) with what you tell it to 'return'.
// var arrayOfNames = ships.map(function(ship) {return ship.name;});
// console.log(arrayOfNames);

 // Prompt 3 -

 // var yearLost = ships.map(function(ship){
 //   return ship.lost;
 // });
 // console.log(yearLost);

 // Say you wanted the year of the first ship that was lost: console.log(yearLost[0]);

 // Prompt 4 - get the name & year off all ships lost *after* 1900
 // .filter return true or false for each element of an array, then

// var newlyLost = ships.filter(function(ship){
//     return ship.lost > 1900;
// });
// console.log(newlyLost);

// Prompt 5
// treats null like it's the number 0, so it returns "null" because it thinks it's less than 1900
// var oldlyLost = ships.filter(function(ship){
//   return ship.lost < 1900 && ship.lost! = null;
// });
// console.log(oldlyLost);

// Prompt 6
// var 19CenturyLost = ships.filter(function(ship){
//   return ship.lost > 1800 && ship.lost < 1899;
// });
// console.log(19CenturyLost);

// Prompt 7
// .indexOf searches for something specific in a string and returns the index of where it found the first instance
// if the string doesn't contain what you're searching for, it will return a -1
// var hmsName = ships.filter(function(ship){
//   return ship.name.indexOf("HMS") != -1;
//
// });
// console.log(hmsName);

// Another way, use .includes
var hmsName = ships.filter(function(ship){
  return ship.name.includes("HMS");
});
console.log(hmsName);

}) ();
