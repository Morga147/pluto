PART 1
mongo
db
use monsters
db.createCollection('vampires')
db.vampires.insert([ <paste seed file contents>])

PART 2
<!-- Added {name: 1} to each query to just return the vampires' names and not their whole data object -->
db.vampires.find({victims:{$gt:500}}, {name: 1})
db.vampires.find({victims:{$lte:150}}, {name: 1})
db.vampires.find({victims:{$ne:210234}}, {name: 1})
db.vampires.find({$and: [{victims: {$gt:150}},{victims: {$lt:500}}]},{name: 1})

PART 3
db.vampires.find({title:{$exists:true}},{name: 1})
db.vampires.find({victims:{$exists:false}},{name: 1})
db.vampires.find({$and:[{title:{$exists:true}},{victims:{$exists:false}}]},{name:1})
db.vampires.find({victims:{$gt:1000}}, {name:1})

PART 4
db.vampires.find({$or: [{loves: 'frilly shirtsleeves'}, {loves: 'frilly collars'}]}, {name:1})
db.vampires.find({loves: 'brooding'}, {name: 1})
db.vampires.find({loves: {$in:['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music']}},{name: 1})
db.vampires.find({$and: [{loves: 'fancy cloaks'},{loves: {$nin: ['top hats', 'virgin blood']}}]}, {name: 1})

PART 5
db.vampires.find({$or: [{location:'New York, New York, US'}, {location: 'New Orleans, Louisiana, US'}]}, {name: 1})
db.vampires.find({$or: [{loves: 'brooding'}, {loves: 'being tragic'}]}, {name: 1})
db.vampires.find({$or: [{victims: {$gt: 1000}}, {loves: 'marshmallows'}]}, {name: 1})
db.vampires.find({$or: [{hair_color: 'red'}, {eye_color: 'green'}]}, {name: 1})

PART 6
db.vampires.find({$and: [{loves: 'ribbons'}, {hair_color: {$not: {$eq: 'blonde'}}}]}, {name: 1})
db.vampires.find({location: {$not:{$eq: 'Rome'}}}, {name: 1})
db.vampires.find({$nor: [{loves: 'fancy cloaks'}, {loves: 'frilly shirtsleeves'}, {loves: 'appearing innocent'}, {loves: 'being tragic'}, {loves: 'brooding'}]}, {name: 1})
db.vampires.find({victims: {$not: {$gt: 200}}}, {name: 1})

PART 7
npm init
npm install express mongodb --save
touch index.js
