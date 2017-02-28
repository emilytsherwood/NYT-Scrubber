// Require mongoose
var mongoose = require("mongoose");

// Setting up the schema
var Schema = mongoose.Schema;
var ArticleSchema =  new Schema ({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

// Compiling movieSchema into an Article Model
var Article = mongoose.model('Article', ArticleSchema);

// Exporting the model
module.exports = Article;