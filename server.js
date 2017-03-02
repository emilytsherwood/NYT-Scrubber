// Dependencies
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var mongoose = require("mongoose");
var Article = require("./models/Articles.js");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

var PORT = process.env.PORT || 3000;

// Database connection - Setting up the default mongoose connection
mongoose.connect('mongodb://localhost/nytreact');
var db = mongoose.connection;
// Bind connection to error event
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Mongoose is connected!")
});

// Routes

// GET main page, serving up the HTML page
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname+ "/index.html"));
});

// GET route for all articles
app.get("/api/saved", function(req, res) {
    Article.find({}, function(error, doc) {
        if (error) {
            console.log(error);
        }
        else {
            res.json(doc);
        }
    });
});


// GET route to query MongoDB for saved articles
app.get("/api/saved", function(req, res) {
    // Go to Mongo collection and find all saved articles
    Article.find({})
        .limit(5)
        .exec(function (error, found) {
        // Errors
        if (error) {
            console.log(error);
        }
        else {
            res.json(found);
        }
    });
});

// POST route to save an article to the Database
app.post("/api/saved", function(req, res) {
    // Saving the request body as an object called saveArticles
    var saveArticles = new Articles(req.body);

    // Setting the object to have a boolean value so we know if it is saved or not saved
    // saveArticles.saved = false;

    saveArticles.save(function(error, doc) {
        // Errors
        if (error) {
            console.log(error);
        }
        else {
            res.send(doc);
        }
    });
});

// DELETE to delete a saved article from the Database
app.delete("/api/saved/:id", function(req, res) {
    Article.remove({
        _id: req.params.id})
        // Will execute the above query
        .exec(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
});

app.listen(3000, function() {
    console.log("App running on Port 3000");
});