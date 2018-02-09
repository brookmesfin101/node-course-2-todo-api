var express = require("express");
var bodyParser = require("body-parser");
var {ObjectID} = require('mongodb');

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {User} = require("./models/user");

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get("/todos", (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(ObjectID.isValid(id)){
        Todo.findById(id).then((todo) => {
            if(todo){
                res.send({todo});
            }
            else {
                res.status(404).send();
            }
        }, (e) => {
            res.status(404).send();
        })
    }
    else {
        res.status(404).send();
    }

    // Validate id using iValid
        // respond with 404 if not found -- send back empty send
    
    // findById
        // success
            // if todo - send it back
            // if no todo - send back 404 with empty body
        // error
            // 400 - and send empty body back
    //res.send(req.params);
});

app.delete("/todos/:id", (req, res) => {
    var id = req.params.id;

    if(ObjectID.isValid(id))
    {
        Todo.findByIdAndRemove(id).then((todo) => {
            if(!todo){
                return res.status(404).send();
            }
            
            res.status(200).send(todo);
        }, (e) => {
            res.status(404).send();
        });
    }
    else
    {
        res.status(404).send();
    }    
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

// var newUser = new User({
//     email: "brookmesfin@gmail.com"
// });

// newUser.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log("Unable to add db entry", e);
// });

// var newTodo =  new Todo({
//     text: "Cook dinner"
// });

// newTodo.save().then((doc) => {
//     console.log("Saved todo", doc);
// }, (e) => {
//     console.log("Unable to save todo", e)
// });

module.exports = {app};