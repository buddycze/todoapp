var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //using built-in promises
mongoose.connect("mongodb://localhost:27017/TodoApp"); //connect to a db

module.exports = {
  mongoose
}
