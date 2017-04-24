//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//object destructuring
//var {name} = user;
//

var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to mongodb');

db.collection('Users').find({name: "Tomori Nao"}).toArray().then((docs) => {
  console.log(docs)
}, (err) => {

});
  /*db.close();*/
});
