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
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
    // Will only save one comment's ObjectId
    // Ref refers to the Comment model
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
});

// Compiling movieSchema into an Article Model
var Article = mongoose.model('Article', ArticleSchema);

// Exporting the model
module.exports = Article;