const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: "5a73db5bf1ee9c38dc2ee801"}).then((todo) => {

});

Todo.findByIdAndRemove("5a73db5bf1ee9c38dc2ee801").then((todo) => {
    console.log(todo);
});