// Including React
var React = require("react");
var axios = require("axios");
var Router = require("react-router");

// Helper for making AJAX requests to our API
var helper = require("../utils/helpers");

// Including sub-components
var Saved = require("./Saved.js");

// The Main component (The parent)
var Search = React.createClass({

        getInitialState: function() {
        return {
            searchTerm: "",
            results: []
        }
    },

     // The moment the page renders get the History
  componentDidMount: function() {
    // Get the latest history.
    helper.getArticles().then(function(response) {
      console.log(response);
      if (response !== this.state.results) {
        console.log("Articles", response.data);
        this.setState({ results: response.data });
      }
    }.bind(this));
  },

  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {

    // Run the query for the address
    helper.runQuery(this.state.searchTerm).then(function(data) {
      if (data !== this.state.results) {
        console.log("Articles", data);
        this.setState({ results: data });

    // After we've received the result... then post the search term to our history.
    helper.postArticles(this.state.searchTerm).then(function() {
        console.log("Posted!");

    // After we've done the post... then get the updated history
    helper.getArticles().then(function(response) {
        console.log("Current History", response.data);

        console.log("History", response.data);

            this.setState({ results: response.data });

          }.bind(this));
        }.bind(this));
      }
    }.bind(this));
  },

  // This function allows childrens to update the parent.
  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },
    // Describing the component's render method
    render: function() {
        var allArticles = this.props.history.map(function(search, i) {
            return (
              <li key={response.index}>title={response.title} - {response.url}</li>
            );
          })}
         (
            <form>
                    <label>
                        Topic:
                        <input type="text" className="form-control text-center" id="term" placeholder="Search articles" required />
                    </label>
                    <br />
                    <label>
                        Start Year:
                        <input type="number" className="form-control" id="startYearInput" placeholder="Start year" />
                    </label>
                    <br />
                    <label>
                        End Year:
                        <input type="number" className="form-control" id="endYearInput" placeholder="End year" />
                    </label>
                        <button type="submit" className="btn btn-success">Search</button>
                </form>

        )
    });
                         
        