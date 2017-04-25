//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to mongodb');

  //delete many
  /*db.collection('Todos').deleteMany({text: "Fuck yourselves"}).then((result) => {
    console.log(result.result);
  });*/

  //delete one
  /*
  db.collection('Todos').deleteOne({text: "Fuck you :)"}).then((result) => {
    console.log(result.result);
  });*/
  db.collection('Users').findOneAndDelete({name: "Tomori Nao"}).then((result) => {
    console.log(result)
  });
});
