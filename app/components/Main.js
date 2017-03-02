// Including React
var React = require("react");

// Including sub-components
var Search = require("./children/Search");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helper");

// The Main component (The parent)
var Main = React.createClass({

    getInitialState: function() {
        return {
            searchArticles: "",
            startYear: "",
            endYear: "",
            results: "",
            duplicates: false,
            resultsHistory: []
        }
    },

     // The moment the page renders get the History
  componentDidMount: function() {
    // Get the latest history.
    helpers.getHistory().then(function(response) {
      console.log(response);
      if (response !== this.state.resultsHistory) {
        console.log("History", response.data);
        this.setState({ resultsHistory: response.data });
      }
    }.bind(this));
  },

  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {

    // Run the query for the address
    helpers.runQuery(this.state.searchArticles).then(function(data) {
      if (data !== this.state.results) {
        console.log("Address", data);
        this.setState({ results: data });

    // After we've received the result... then post the search term to our history.
    helpers.postHistory(this.state.searchArticles).then(function() {
        console.log("Updated!");

    // After we've done the post... then get the updated history
    helpers.getHistory().then(function(response) {
        console.log("Current History", response.data);

        console.log("History", response.data);

            this.setState({ resultsHistory: response.data });

          }.bind(this));
        }.bind(this));
      }
    }.bind(this));
  },

  // This function allows childrens to update the parent.
  setTerm: function(term) {
    this.setState({ searchArticles: term });
  },

    // Describing the component's render method
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron">
                        <h1 className="heading-display">New York Times - Article Scrubber</h1>
                        <p className="subheading-display">Search for and save articles of interest!</p>
                    </div>

                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center">Search</h3>
                            </div>
                            <div className="panel-body">
                                <Search  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Main;