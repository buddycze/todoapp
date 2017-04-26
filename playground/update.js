//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to mongodb');
/*
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('58fcbbaadb583dd341626bcf')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
*/
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("58fcafbd8806602f08dbda59")
  }, {
    $set: {
      name: "Otosaka Nao"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
});
