// Include React
var React = require("react");
var axios = require("axios");

// This is the History component. It will be used to show a log of  recent searches.
var Saved = React.createClass({
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body text-center">
          {/* Here we use a map function to loop through an array in JSX */}
          {this.state.history.map(function(search, i) {
            return (
              <li key={response.index}>title={response.title} - {response.url}</li>
            );
          })}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
