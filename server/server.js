var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //using built-in promises
mongoose.connect("mongodb://localhost:27017/TodoApp"); //connect to a db

//tis a model
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true //"removes" whitespace, so its not counted
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

var user = new User({
  email: 'example@gmal.com   '
});

user.save().then((doc) => {
  console.log('user saved', doc);
}, (e) => {
  console.log('Unable to save user');
});
/*
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
*/
