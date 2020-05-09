// Dependencies
// =============================================================
const express = require("express");
const path = require("path");


// Sets up the Express App
// =============================================================
const server = express();
const PORT = process.env.PORT || 3000;

// Used with POST methods
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
//USED WITH POST METHODs

server.use('/public', express.static(__dirname + "/public"));

const current = [
    {
        "name": "ike, barranco",
        "number": "3333333333",
        "email": "email",
        "id": "id",
        "additionalComments": "comment"
    },
    {
        "name": "ike, barranco",
        "number": "3333333333",
        "email": "email",
        "id": "id",
        "additionalComments": "comment"
    },
    {
        "name": "ike, barranco",
        "number": "3333333333",
        "email": "email",
        "id": "id",
        "additionalComments": "comment"
    },
    {
        "name": "ike, barranco",
        "number": "3333333333",
        "email": "email",
        "id": "id",
        "additionalComments": "comment"
    },
    {
        "name": "ike, barranco",
        "number": "3333333333",
        "email": "email",
        "id": "id",
        "additionalComments": "comment"
    },
];
const waiting = [
    {
        "name": "ike, barranco",
        "number": "3333333333",
        "email": "email",
        "id": "id",
        "additionalComments": "comment"
    },
    {
        "name": "ike, barranco",
        "number": "3333333333",
        "email": "email",
        "id": "id",
        "additionalComments": "comment"
    },
];

// Starts the server pathing
// =============================================================

//get path for index
//res.send(File Path index)
server.get("/", function(req, res) {
    
    //Intialize 
    res.sendFile(path.join(__dirname, "index.html"));
});


//get path for reservationForm
//res.send(File Path View.html)
server.get("/view", function(req, res) {
    
    //Intialize 
    res.sendFile(path.join(__dirname, "view.html"));
});


//get path for reservation List
//res.send(File Path form)
server.get("/form", function(req, res) {
    
    //Intialize 
    res.sendFile(path.join(__dirname, "form.html"));
});


//get path for await list api
//res.json()
server.get("/api/current", function(req, res) {
    //Intialize 
    res.json(current);
});


//get path for current reservation API
//res.json()
server.get("/api/waiting", function(req, res) {
    //Intialize 
    res.json(waiting);
});


//post for await list api
server.post("/api/current", function(req, res) {
    const reservation = req.body;
    current.push(reservation); 
});


//get post for current reservation API
//res.json()
server.post("/api/waiting", function(req, res) {
    const reservation = req.body;
    waiting.push(reservation); 
});

// Starts the server to begin listening
// =============================================================
server.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

