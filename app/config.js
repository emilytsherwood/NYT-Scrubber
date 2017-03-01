// Where all the API set-up is going to going

var authkey = "08c4a36d32804e9287729e50349c495d"

var queryTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

// Based on the queryTerm a queryURL is created
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authkey + "&q=";

// Arrat to hold various article info
var articleCounter = 0;

