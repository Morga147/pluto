(function(){
var buenosAires = { location: "Buenos Aires",
                    depthInMeters: "400",
                    annualBudget: 1000000,
                    specimens: ["Dilophosaurus","Brachiosaurus"]};
var mexico = { location: "Mexico",
              depthInMeters: "350",
              annualBudget: 900000,
              specimens: ["Gallimimus","Parasaurolophus"]};
var snakewaterMontana = {location: "SnakewaterMontana",
                        depthInMeters: "10",
                        annualBudget: 150000,
                        specimens: ["Velociraptor","Brachiosaurus"]};
var nicaragua = { location: "Nicaragua",
                  depthInMeters: "200",
                  annualBudget: 1500000,
                  specimens: ["Tyrannosaurus Rex","Stegosaurous","Triceratops","Velociraptor"]};

var digSites = [buenosAires, mexico, snakewaterMontana, nicaragua];

// Problem #1
for (var i=0; i<digSites.length; i++) {
  console.log(digSites[i].location+": "+digSites[i].specimens);
}

// Problem #2: My version...
function averageDepth (){
  var depth = 0;
  var average = 0;
  for (var i=0; i<digSites.length; i++) {
    depth += parseInt(digSites[i].depthInMeters);
  }
  average = depth/digSites.length;
  console.log(average);
}
averageDepth();

// Bonus: Ed's Version...
(function(){
  var buenosAires = { location: "Buenos Aires",depthInMeters: "400",annualBudget: 1000000,specimens: ["Dilophosaurus","Brachiosaurus"]};
  var mexico = { location: "Mexico",depthInMeters: "350",annualBudget: 900000,specimens: ["Gallimimus","Parasaurolophus"]};
  var snakewaterMontana = {location: "SnakewaterMontana",depthInMeters: "10",annualBudget: 150000,specimens: ["Velociraptor","Brachiosaurus"]};
  var nicaragua = { location: "Nicaragua",depthInMeters: "200",annualBudget: 1500000,specimens: ["Tyrannosaurus Rex","Stegosaurous","Triceratops","Velociraptor"]};
  var hammondsMines = [];
  var digs = [buenosAires,mexico,snakewaterMontana,nicaragua];
  var totalDepth = 0;
  for (var i=0; i<digs.length; i++){
    console.log("Dig Site: "+digs[i].location);
    hammondsMines.push(digs[i]);
    for (var j=0; j<digs[i].specimens.length; j++){
      console.log((j+1)+": "+digs[i].specimens[j]);
    }
    totalDepth += parseInt(digs[i].depthInMeters);
  }
  console.log("Average Depth (in meters): "+ totalDepth/digs.length);
  console.log(hammondsMines);
})();

})();

/////////////////////////////////
// Bobby's Version of EVERYTHING
////////////////////////////////
var buenosAires = { location: "Buenos Aires",depthInMeters: "400",annualBudget: 1000000,specimens: ["Dilophosaurus","Brachiosaurus"]};
var mexico = { location: "Mexico",depthInMeters: "350",annualBudget: 900000,specimens: ["Gallimimus","Parasaurolophus"]};
var snakewaterMontana = {location: "SnakewaterMontana",depthInMeters: "10",annualBudget: 150000,specimens: ["Velociraptor","Brachiosaurus"]};
var nicaragua = { location: "Nicaragua",depthInMeters: "200",annualBudget: 1500000,specimens: ["Tyrannosaurus Rex","Stegosaurous","Triceratops","Velociraptor"]};

//pushing locations into hammondsMines
var hammondsMines = [];
hammondsMines.push(buenosAires);
hammondsMines.push(mexico);
hammondsMines.push(snakewaterMontana);
hammondsMines.push(nicaragua);

//function to get aerage depth of mines
var getAverageDepth = function(){
    var sum = 0;
    for(var i = 0; i < hammondsMines.length; i++){
        sum += parseInt(hammondsMines[i]['depthInMeters']);
    }
    return sum / hammondsMines.length;
}

//printSpecimen function to output all of the specimen from each location
var printSpecimen = function(){
    //Initializing location variable
    var location;
    //looping through all locations
    for(var i = 0; i < hammondsMines.length; i++){
        location = hammondsMines[i];
        console.log(location['location'] + ":");
        //looping through speciment at each location
        for(var j = 0; j < location['specimens'].length; j++){
            console.log(location['specimens'][j]);
        }
        console.log("\n");
    }
}
