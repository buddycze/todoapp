var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //using built-in promises
mongoose.connect("mongodb://localhost:27017/TodoApp"); //connect to a db

//tis a model
var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var newTodo = new Todo({
  text: "Programm",
  completed: true,
  completedAt: 29
});

newTodo.save().then((doc) => {
  console.log('Saved todo', doc);
}, (e) => {
  console.log("Unable to save todo");
});
