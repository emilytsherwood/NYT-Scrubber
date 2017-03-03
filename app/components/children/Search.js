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
//   componentDidUpdate: function() {

//     // Run the query for the address
//     helpers.runQuery(this.state.searchArticles).then(function(data) {
//       if (data !== this.state.results) {
//         console.log("Address", data);
//         this.setState({ results: data });

//     // After we've received the result... then post the search term to our history.
//     helpers.postHistory(this.state.searchArticles).then(function() {
//         console.log("Updated!");

//     // After we've done the post... then get the updated history
//     helpers.getHistory().then(function(response) {
//         console.log("Current History", response.data);

//         console.log("History", response.data);

//             this.setState({ resultsHistory: response.data });

//           }.bind(this));
//         }.bind(this));
//       }
//     }.bind(this));
//   },

//   // This function allows childrens to update the parent.
//   setTerm: function(term) {
//     this.setState({ searchArticles: term });
//   },
    // Describing the component's render method
    render: function() {
        return (
            <form>
                    <label>
                        Topic:
                        <input value={this.state.term} type="text" className="form-control text-center" id="term" placeholder="Search articles" onChange={this.handleChange} required />
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
                        <button type="submit" className="btn btn-success" onClick={this.handleClick}>Search</button>
                </form>
        )
    }
});
                         
        