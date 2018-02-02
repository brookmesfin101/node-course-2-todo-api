const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a64cf004199a38810dc53381';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos", todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo", todo);
// });

// Todo.findById(id).then((todo) =>{
//     if(!todo){
//         return console.log("ID not found");
//     }

//     console.log("Todo by Id", todo);
// }).catch((e) => console.log(e));

User.findById('5a64c1ce397fd2102e87cf3b').then((user) => {
    if(!user){
        return console.log("ID not found");
    }

    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));