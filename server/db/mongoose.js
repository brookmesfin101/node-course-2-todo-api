var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");
//mongoose.connect("mongodb://brookmesfin:brook@ds121898.mlab.com:21898/node-todo-api");

module.exports = {
    mongoose : mongoose
}

