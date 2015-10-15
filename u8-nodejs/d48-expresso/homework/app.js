var express = require('express');
var bodyParse = require('body-parser');
var path = require('path');

var app = express();
var muppetsDB = [
  {id: 1, name: "Kermit", description: "green, frog", age: "37"},
  {id: 2, name: "Fozzy Bear", description: "comedian, bear", age: "40"},
  {id: 3, name: "Swedish Chef", description: "chef, VERY Swedish", age: "unknown"},
  {id: 4, name: "Gonzo", description: "blue", age: "37"}
];

app.use(bodyParse.urlencoded({extend: false}));
app.use(bodyParse.json());
app.set(express.static(path.join(__dirname, '/public')));

app.set('port', 1337);
app.listen(app.get('port'), function(){
  console.log("App listening on http://localhost:%s", app.get('port'));
});

app.get('/', function(req, res){
  res.send("<h3>Hey look, I'm expressing myself! Waka Waka!</h3>");
});

app.get('/muppets', function(req, res){
  res.send(muppetsDB);
});

app.get('/muppets/:id', function(req, res) {
  var id = req.params.id;
  var m = muppetsDB[id];
  res.send(m);
});

app.post('/muppets/new', function(req, res){
  var name = req.body.name;
  var description = req.body.description;
  var age = req.body.age;

  muppetsDB.push({ name: name, description: description, age: age });
  console.log(muppetsDB);
  res.send({status: 'success'});
});

app.patch('/muppets/patch/:id', function(req, res){
  muppetsDB.splice((req.params.id-1), 1, req.params.name);
  muppetsDB.splice((req.params.id-1), 1, req.params.description);
  muppetsDB.splice((req.params.id-1), 1, req.params.age);
  console.log(muppetsDB);
  res.send({status: 'success'});
});

app.delete('/muppets/delete/:id', function(req, res){
  muppetsDB.splice((req.params.id-1), 1);
  console.log(muppetsDB);
  res.redirect('/');
});
