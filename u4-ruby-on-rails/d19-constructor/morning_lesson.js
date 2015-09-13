var Bobby = {
  firstName: 'Bobby',
  lastName: 'King',
  isHandsome: true,
  greet: function(){
    console.log("Hello!");
  }
}

var Dennis = {
  firstName: 'Dennis',
  lastName: 'Liaw',
  isHandsome: true,
  greet: function(){
    console.log("Hello!");
  }
}
// create a constructor function, similar to the initialize function in ruby
var Person = function(firstName, lastName, isHandsome){
  // "this" is the same as the instance variable in Ruby
  this.firstName = firstName;
  this.lastName = lastName;
  this.isHandsome = isHandsome;
  this.greet = function(){
    console.log("Hello!");
  }
  this.fullName = function(){
    return this.firstName + " " + this.lastName;
  }
}

// DRY up the Person class:
var Person = function(firstName, lastName, isHandsome){
  // "this" is the same as the instance variable in Ruby
  this.firstName = firstName;
  this.lastName = lastName;
  this.isHandsome = isHandsome;
}
Person.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}
Person.prototype.greet = function(){
  return "Hello!" + this.fullName();
}
// Ruby equivalent:
// class Person
  // def initialize(first_name, last_name, is_handsome)
  // @first_name = first_name
  // @last_name = last_name
  // @is_handsome = is_handsome
// end
// def full_name
  // "#{@first_name} #{@last_name}"
// end

var Dennis = new Person('Dennis', 'Liaw', true);
var Bobby = new Person('Bobby', 'King', true);

// Create a fish
var Fish = function(type, name){
  this.type = type;
  this.name = name;
  this.swim = function(){
    console.log("Just keep swimming.");
  }
}

var betta = new Fish('freshwater', 'betta');
var swordfish = new Fish('saltwater', 'swordfish');

// Now let's modify the fish prototype
Fish.prototype.eat = function() {
  console.log("Chomp chomp");
}
// When you declare a constructor function, only define attributes that are unique to each fish or person, for example
// functions that are general to all should be defined through prototype so that the function is referenced each time
// and not created again from scratch

//
