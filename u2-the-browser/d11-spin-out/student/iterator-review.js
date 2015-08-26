// Native JS iterators

// FOR IN  --> iterate over the keys of the object (if you don't know what they are)
  var obj = {
    name: "pan",
    gender: "male"
  }
      // Dot notation: when you know what the key is specifically. Ex: console.log(obj.gender) will print "male".
  for(key in obj) {
    console.log("the key type is ", typeof key);
    console.log("the key ", key);
    //obj[key];
  }

  var car = {name: "tesla", model: "s", type: "sport"};
  for(spec in car) {
    console.log(spec+":", car[spec]+"\n");
  }

// .forEach
  array.forEach(function(element){
    //do something
  });

// .map
//returns a new array
  var newArray = array.map(function(element){

  });

// .filter
// returns a new array
// don't forget the return statement
var newArray = array.filter(function(element){
  if(//something)
    return true //this will go into the new array
  else
    return false // this will not go into the new array 
});
