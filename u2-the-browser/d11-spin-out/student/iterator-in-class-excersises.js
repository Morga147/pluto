// Number 1
var car = {brand: "ford", model: "mustang", price: "40,000", style: "sport"}
for(key in car) {
  console.log(key+":", car[key]+"\n");
}

// Number 2
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
numbers.forEach(function(element){
  if(element%2 === 0){
    console.log(element + " is even.");
  } else {
    console.log(element + " is odd.");
  }
});

// Number 3
(function(){
var sampleBalances  = [100, 25, 3000, 45, 36];
sampleBalances.forEach(function(element){
  return element-14;
});
  console.log(sampleBalances);
})();

// Number 4 --> Create a range of numbers
(function(){
var individualNums = 0;
var newArray = [];
function range(firstInt, lastInt){
  for(var i = 0; i <= (lastInt-firstInt); i++){
    individualNums += 
  }
 }
 console.log(newArray);
})();

// Number 5 --> Lengths fo Strings
