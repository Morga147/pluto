// So... is EJS something that needs to be downloaded
// or can I simply change the file extension and have it
// work? 

var express = require('express');
var mongo = require('mongodb');

var client = mongo.MongoClient;
var app = express();
client.connect('mongodb://localhost:27017/monsters',
  function(error, db){
    if(error){
      console.log('Couldn\'t connect.');
    }else{
      app.get('/', function(req, res){
        var query = db.collection('vampires').find();
        var vampires = query.toArray(function(error, vampires){
          res.send(vampires);
        });
      });
    }
  }
);
app.listen(3000);
