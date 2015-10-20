var express = require('express');
var mongo = require('mongodb');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var client = mongo.MongoClient;

app.use(bodyParser.urlencoded({ extend: false}));
app.use(bodyParser.json());
app.set('port', 3000);

app.use('/', express.static(path.join(__dirname, 'public')));

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





// app.get('/vampires', function(req, res) {
// 	res.send(vampireDB);
// });
// app.post('/vampires/new', function(req, res) {
// 	vampireDB.push(req.body);
// 	console.log(vampireDB);
// 	res.send({status: 'success'});
// });

app.listen(app.get('port'), function() {
	console.log('App listening on http://localhost:%s', app.get('port'));
});
