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

 db.collection('Todos').insertOne({
    text: 'Fuck you :)',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('ERROR OCCURED WHILE INSERTING', err);
    }

    console.log(JSON.stringify(result.ops));
  });
/*
  db.collection('Users').insertOne({
    name: "Tomori Nao",
    age: 16,
    location: "Star Ocean Academy"
  }, (err, results) => {
    if (err) {
      return console.log('Erroru');
    }
    console.log('Inserted: ' + JSON.stringify(results.ops));
  });
*/
  db.close();
});
