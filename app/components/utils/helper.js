// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var newyorktimesAPI = "08c4a36d32804e9287729e50349c495d"

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(location) {

    console.log(location);

    // Figure out the geolocation
    var queryURL =  "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + newyorktimesAP + "&q=";
    return axios.get(queryURL).then(function(response) {
      // If we get a result, return that result's formatted address property
      if (response.data.results[0]) {
        return response.data.results[0].formatted;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api/saved");
  },

  // This function posts new searches to our database.
  postHistory: function(article) {
    return axios.post("/api/saved", { article: article });
  }
};

// We export the API helper
module.exports = helper;